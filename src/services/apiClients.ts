import supabase from "./supabase";

export async function getClients() {
  let { data: clients, error } = await supabase.from("clients").select("*");

  if (error) {
    console.error(error);
    throw new Error("Clients images couldn't be loaded!");
  }

  return clients;
}
