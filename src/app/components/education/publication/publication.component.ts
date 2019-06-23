import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
   publicationList = [
    {
      Name: "Ben Hassen M., Deffontaines B., Turki M.M. (2014): Recent tectonic activity of the Gafsa fault through morphometric analysis - Southern Atlas of Tunisia. Quaternary International, Vol. 338, pp. 99-112. http://www.sciencedirect.com/science/article/pii/S104061821400305X."
    },
    {
      Name:"Ben Hassen M., Deffontaines B., Turki M.M. (2014): Analysis of Recent Deformation in the Southern Atlas of Tunisia Using Geomorphometry. Chapter N.: 20 In G. Lollino et al. (eds.), Engineering Geology for Society and Territory – Volume 6, DOI: 10.1007/978-3-319-09060-3_20, © Springer International Publishing Switzerland 2014."
    },
    {
      Name: "Ben Hassen M., Deffontaines B., Turki M.M. (2014): Semi-automated extraction of drainage anomalies. Application to the center of the southern Atlas of Tunisia. Revue Géomorphologie: relief, processus, environnement. 2014, n° 1, pp. 3-14."
    },
    {
      Name: "Ben Hassen M., Deffontaines B., Rebai N., Turki M.M. (2012): Contribution of drainage network and LANDSAT ETM+ photo-interpretation for homogenization of the geological mapping coverage: Application to some examples in Southern Tunisia. Photo-Interpretation  European Journal of Applied Remote Sensing, N° 2012/3, pp.2-14."
    },
    {
      Name :"Ben Hassen M., Rebai N., Deffontaines B., Turki M.M., Chaabani F. (2011): Phosphate mine subsidences deduced from Differential Interferometry (DInSAR): the Moulares case example (southern Atlas of Tunisia). Comptes Rendus Geoscience, Vol 343, Issues 11–12, pp. 729-737."
    },
    {
      Name: "BEN Hassen M., KAVEH H. F., DEFFONTAINES B. (2008): Contribution of radar interferometry to study small deformations caused by the behavior of materials under extreme climate clay: Application to Lagny region (eastern Paris). International Conference “URBISTICS AND DEVELOPMENT”: Today’s Challenges and Paths of the Future. March 10, 2008, proceeding pp. 258-266."
    }
  ]
  constructor() {
  }


 
ngOnInit() {
}
}
