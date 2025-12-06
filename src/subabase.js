import { createClient } from "@supabase/supabase-js";

// Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // Check if the search term exists in the database
    const { data, error } = await supabase
      .from("search_terms")
      .select("id, count")
      .eq("search_term", searchTerm)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 means no rows returned, which is expected if the term doesn't exist
      console.error("Error fetching search term:", error);
      return;
    }

    if (data) {
      // If it exists, update the count
      const { error: updateError } = await supabase
        .from("search_terms")
        .update({ count: data.count + 1, updated_at: new Date() })
        .eq("id", data.id);

      if (updateError) {
        console.error("Error updating search term:", updateError);
      }
    } else {
      // If it doesn't exist, create a new record
      const { error: insertError } = await supabase
        .from("search_terms")
        .insert({
          search_term: searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        });

      if (insertError) {
        console.error("Error inserting search term:", insertError);
      }
    }
  } catch (error) {
    console.error("Unexpected error in updateSearchCount:", error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const { data, error } = await supabase
      .from("search_terms")
      .select("id, search_term, count, movie_id, poster_url")
      .order("count", { ascending: false })
      .limit(5);

    if (error) {
      console.error("Error fetching trending movies:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Unexpected error in getTrendingMovies:", error);
    return [];
  }
};
