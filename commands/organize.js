
const fs = require("fs");
const path = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };

function organizefn(dirpath) {
    let destpath
    if (dirpath == undefined) {
      console.log("please enter a valid direcctory path");
      return;
    } else {
      let doexists = fs.existsSync(dirpath);
      // console.log(doexists);
      // it checks whether the directory path exists or not
       if(doexists==true)
       {
         destpath=path.join(dirpath,'organized_files')
        //  C:\webd\Test folder\organized_files  --this will be the resultant directory path
        //  check if the folder already exists?
         if(fs.existsSync(destpath)==false)
         {
          fs.mkdirSync(destpath)
         }
         else{
          console.log('file already exists')
         }
       } else{
        console.log('please eneter a valid path')
       }
  
    }
    organizeHelper(dirpath,destpath)
  }
  // we are writing the function to categorize the files
  function organizeHelper(src,dest){
    let childNames=fs.readdirSync(src)
    // console.log(childNames)  
    
    for(let i=0;i<childNames.length;i++)
    {
    let childAdd=path.join(src,childNames[i])
    let isFile=fs.lstatSync(childAdd).isFile()
      // console.log(childAdd +" "+isFile)
      if(isFile==true)
      {
        let fileCategory=getCategory(childNames[i])
        console.log(childNames[i]+ " belongs to "+fileCategory)
        sendFiles(childAdd,dest,fileCategory)
      }
    }
  }
  
  function getCategory(name){
    let ext=path.extname(name)
    ext=ext.slice(1)
    // console.log(ext)
    
    
    for(let type in types){
      let cTypeArr=types[type]
      // console.log(cTypeArr)
  
      for(let  i=0;i<cTypeArr.length;i++)
        if(ext==cTypeArr[i])
        return type
    }
    return 'others'
  
  }
  
  
  function sendFiles(srcFilePath,dest,fileCategory){
    let catPath = path.join(dest,fileCategory)
  
    if(fs.existsSync(catPath)==false)   //checking for category folder path
        fs.mkdirSync(catPath)          //here we created a path for the files in category folders
  
  
      let fileName=path.basename(srcFilePath)   //we took out the names of the files
      let destFilePath=path.join(catPath,fileName)  //here we created a path for the files in category folder
  
      fs.copyFileSync(srcFilePath,destFilePath)   //copied files from src to dest
  
      fs.unlinkSync(srcFilePath)                 //deleted the files from src
      console.log(fileName+"is copied to "+fileCategory)
  
  
  
  
      }

      module.exports={
        organizeKey : organizefn
      }