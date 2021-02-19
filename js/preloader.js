// Copyright 2020-2021 Shrid Pant

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// For testing the preloader
function loadedContent(){
  myVar = setTimeout(showPage, 3000);
}

function showPage(){
  // Hide the preloader
  document.querySelector(".preloader-wrap").style.visibility = "hidden";
  // Show the main contents
  document.querySelector("#mainPage").style.visibility = "visible";
  document.querySelector("#afterHome").style.display = "block";
  document.querySelector("#mainNavbar").style.display = "block";
}