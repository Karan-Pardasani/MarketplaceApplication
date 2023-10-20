// Add functions that are related to sections
import $ from 'jquery';

export function create_new_section(data) {
  switch (data.section_type) {
    case 'carousel':
      data = {
        ...data,
        carousel_items: []
      }
      break;
    
    case "text-editor": 
      data = {
        ...data,
        editor_content: {}
      }
      break;
    case "form":
      data = {
        ...data,
        groups:[
          {
            title: "",
            fields: []
          }
        ]
      }
  
    default:
      break;
  }
  return data
  
}

export function uploadFile(files){
  const {IMGUR_CLIENT_ID} = process.env;
  var apiKey = IMGUR_CLIENT_ID;
  var apiUrl = 'https://api.imgur.com/3/image';
  var settings = {
    async: false,
    crossDomain: true,
    processData: false,
    contentType: false,
    type: 'POST',
    url: apiUrl,
    headers: {
      Authorization: 'Client-ID ' + apiKey,
      Accept: 'application/json',
    },
    mimeType: 'multipart/form-data',
  };

  var formData = new FormData();
  formData.append('image', files[0]);
  settings.data = formData;
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}