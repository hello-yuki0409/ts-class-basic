import { supabase } from "../utils/supabase";

export async function GetAllTodos() {
  const response = await supabase.from("todos").select("*");

  if (response.error) {
    throw new Error(response.error.message);
  }

  console.log(response.data);
}
