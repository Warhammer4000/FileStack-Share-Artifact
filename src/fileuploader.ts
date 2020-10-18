import  *  as filestack from 'filestack-js'





export async function uploadFile(
    apiKey: string,
    filePath: string,
  ): Promise<string> {
    
    const client= filestack.init(apiKey);
    const uploadResponse=await client.upload(filePath);
    return uploadResponse.url;

  }

