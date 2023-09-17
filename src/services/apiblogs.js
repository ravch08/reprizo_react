import supabase from "./supabase";

export async function getBlogs() {
  let { data: blogs, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Blogs couldn't be loaded!");
  }

  return blogs;
}
