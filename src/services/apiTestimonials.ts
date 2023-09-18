import supabase from "./supabase";

export async function getTestimonials() {
  let { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Testimonials couldn't be loaded!");
  }

  return testimonials;
}
