import supabase from "./supabase";

export async function getProducts() {
  let { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products couldn't be loaded!");
  }

  return products;
}
