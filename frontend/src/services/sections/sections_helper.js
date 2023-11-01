// Add functions that are related to sections
import $ from 'jquery';
import store from '../../redux/store';

export function create_new_section() {

}

export async function submitProductTemplateForm(data) {
  const { REACT_APP_BACKEND_URL } = process.env;
  console.log({data: data});
  const state = store.getState();
  const token = state.user.auth.token;
  const result = await $.post({
    url: `${REACT_APP_BACKEND_URL}/api/v1/product-template/create`,
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'
    },
    data: JSON.stringify({data: data})
  }).then((response, textStatus, jqxhr) => {
    console.log(response.status);
    return response;
  }).catch((error) => {
    console.log(error.responseJSON);
  });  
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