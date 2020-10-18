import * as core from '@actions/core'
import { uploadFile } from './fileuploader'

const apiKey = `AcEMYpyRyRNSYzUzGlZ5Iz`||core.getInput('API_KEY')
const filePath = `C:\\Users\\BS_269\\Downloads\\Odin Inspector 3.0.1.unitypackage`||core.getInput('FILE_PATH')






async function run() {

  try {
    const url=await uploadFile(apiKey, filePath);
    console.log(url);
    
  } catch (error) {
    core.setFailed(error)
  }

}



run();

