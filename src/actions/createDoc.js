import axios from "axios";
import { NODE_API_ENDPOINT } from "../utils/utils";
export const createDoc = async () => {
  try {
    const res = await axios.get(
      `${NODE_API_ENDPOINT}/ai-drafter/create_document`
    );
    return res;
  } catch (e) {
    throw new Error(e.value);
  }
};

export const getDocFromPrompt = async (doc_id, prompt) => {
  try {
    const res = await axios.post(
      `${NODE_API_ENDPOINT}/ai-drafter/get_document_from_prompt`,
      {
        doc_id: doc_id,
        prompt: prompt,
      }
    );
    return res;
  } catch (e) {
    throw new Error(e.value);
  }
};

export const breakout = async(doc_id) => {
  try{
    const res = await axios.post(`${NODE_API_ENDPOINT}/ai-drafter/breakout`, {
      doc_id: doc_id,
    });
    return res;
  }
  catch(e)
  {
    throw new Error(e.value)
  }
}