import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  articlesTab = [
    {
      "ID" : "1",
      "Name" : "olivier",
      "Desciption" : "21",
      "imageUrl" : "https://www.leaders.com.tn/uploads/content/thumbnails/157832443026_content.jpg",
      "prix" : "20"
    },
    {
      "ID" : "1",
      "Name" : "olivier",
      "Desciption" : "21",
      "imageUrl" : "https://cdn1.regie-agricole.com/ulf/CMS_Content/1/articles/180633/fiches_Pottinger_aerosem_vt_5000_1_hq-1000x562.jpg",
      "prix" : "20"
    },
    {
      "ID" : "1",
      "Name" : "olivier",
      "Desciption" : "21",
      "imageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqoxvxmWO3_QVcqTXVjnH_n8bVUZ4PyO7Hg2ncs5MnVlc2CaV8mhLR6lMCOf67D_MEc4&usqp=CAU",
      "prix" : "20"
    },
    {
      "ID" : "1",
      "Name" : "olivier",
      "Desciption" : "21",
      "imageUrl" : "https://lh3.googleusercontent.com/proxy/U5OC7AQCBXCWT0vJhh-hvpu4esU-6i9vuXbXjUYQtFeSATBnf9XL6W1DC3fVNtnt4zP5p9ZRABoiAkeOlDvjZrtDlb9GGfa8b3uJIfehmDN4zZiPSJ_ZlK6YZr3KMrdE-R5XPYDtOSZbmg"
    },



  ]
}
