import process from "node:process";

export function observeEnv() {
  const nodeEnv = process.env;
  const denoEnv = Deno.env.toObject();
  const viteEnv = import.meta.env;

  //---First: Check the number of env vars from each source => broken
  console.log("nodeEnv Count:", Object.keys(nodeEnv).length);
  console.log("denoEnv Count:", Object.keys(denoEnv).length);
  console.log("viteEnv Count:", Object.keys(viteEnv).length);
  // Results:
  // nodeEnv Count: 92
  // denoEnv Count: 93
  // viteEnv Count: 7

  //---Second: Check the values of the MY_ENV from each source => broken
  console.log("nodeEnv.MY_ENV:", nodeEnv.MY_ENV);
  console.log("denoEnv.MY_ENV:", denoEnv.MY_ENV);
  console.log("viteEnv.MY_ENV:", viteEnv.MY_ENV);
  // Results:
  // nodeEnv.MY_ENV: undefined
  // denoEnv.MY_ENV: undefined
  // viteEnv.MY_ENV: undefined

  //---Third: Check the values of the VITE_MY_ENV from each source => as expected
  console.log("nodeEnv.VITE_MY_ENV:", nodeEnv.VITE_MY_ENV);
  console.log("denoEnv.VITE_MY_ENV:", denoEnv.VITE_MY_ENV);
  console.log("viteEnv.VITE_MY_ENV:", viteEnv.VITE_MY_ENV);
  // Results:
  // nodeEnv.VITE_MY_ENV: undefined
  // denoEnv.VITE_MY_ENV: undefined
  // viteEnv.VITE_MY_ENV: VITE_MY_ENV test value

  //---Fourth: Check the values of the MY_LOCAL_ENV from each source => broken
  console.log("nodeEnv.MY_LOCAL_ENV:", nodeEnv.MY_LOCAL_ENV);
  console.log("denoEnv.MY_LOCAL_ENV:", denoEnv.MY_LOCAL_ENV);
  console.log("viteEnv.MY_LOCAL_ENV:", viteEnv.MY_LOCAL_ENV);
  // Results:
  // nodeEnv.MY_LOCAL_ENV: undefined
  // denoEnv.MY_LOCAL_ENV: undefined
  // viteEnv.MY_LOCAL_ENV: undefined

  //---Fifth: Check the values of the VITE_MY_LOCAL_ENV from each source => as expected
  console.log("nodeEnv.VITE_MY_LOCAL_ENV:", nodeEnv.VITE_MY_LOCAL_ENV);
  console.log("denoEnv.VITE_MY_LOCAL_ENV:", denoEnv.VITE_MY_LOCAL_ENV);
  console.log("viteEnv.VITE_MY_LOCAL_ENV:", viteEnv.VITE_MY_LOCAL_ENV);
  // Results:
  // nodeEnv.VITE_MY_LOCAL_ENV: undefined
  // denoEnv.VITE_MY_LOCAL_ENV: undefined
  // viteEnv.VITE_MY_LOCAL_ENV: VITE_MY_LOCAL_ENV test value
}
