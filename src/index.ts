import * as core from '@actions/core'
import { uploadFile } from './fileuploader'

const apiKey = core.getInput('API_KEY')
const filePath = core.getInput('FILE_PATH')






async function run() {

  try {
    const url=await uploadFile(apiKey, filePath);
    core.setOutput("File_LINK",url);
    
  } catch (error) {
    core.setFailed(error)
  }

}



run();

