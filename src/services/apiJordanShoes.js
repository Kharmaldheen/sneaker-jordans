import supabase from "./supabase";
export async function getShoes() {
  const { data: jordanshoes, error } = await supabase
    .from("jordanshoes")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("shoes could not be fetched");
  }

  return jordanshoes;
}

export async function getShoe(id) {
  const { data: jordanshoe, error } = await supabase
    .from("jordanshoes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Shoe could not be fetched");
  }

  return jordanshoe;
}
