import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgExternalUrlService {
  appImg = {
    // photo mehdi.jpg
    // tslint:disable-next-line:max-line-length
    photo_mehdi: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/photo%20mehdi.jpg?alt=media&token=3f7992fd-87fa-4a38-8600-53dff6aae42a',

    // MBH.png
    // tslint:disable-next-line:max-line-length
    MBH: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/MBH.png?alt=media&token=7c4257e5-5d4f-4d64-9d5e-bf11472dbe98',
    // scotiabank1

    scotiabank1_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank1%2F1.jpg?alt=media&token=77dcdf0c-cc39-4f74-9014-921da1d8cace',
    scotiabank1_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank1%2F2.jpg?alt=media&token=e95a036d-0843-46ac-9672-fca30e9cf353',
    scotiabank1_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank1%2F3.jpg?alt=media&token=9dc2e8d5-66a2-4018-9851-08d2a4819680',
    scotiabank1_5: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank1%2F5.jpg?alt=media&token=412ba123-25ef-4a6e-af54-c2a17fcfe9a7',
    // scotiabank2
    scotiabank2_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F1.JPG?alt=media&token=76ee1b19-08db-49b0-99fc-8647e742fb03',
    scotiabank2_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F2.JPG?alt=media&token=e0f34cae-4334-4293-914f-c37af533677e',
    scotiabank2_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F3.JPG?alt=media&token=d1d2135c-cb44-49b4-93f1-b7c2015513f6',
    scotiabank2_4: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F4.JPG?alt=media&token=a78f0802-4ccf-4cc3-919b-3cdf764d3a58',
    scotiabank2_5: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F5.JPG?alt=media&token=237615d7-fa3c-4f8e-b016-3fbfd3c07a14',
    scotiabank2_6: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank2%2F6.JPG?alt=media&token=7ac61e4c-2177-4ed5-9957-49374358f8ed',

    // scotiabank3
    scotiabank3_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank3%2F1.JPG?alt=media&token=7dd71393-8917-4ce0-9222-46c115896c20',
    scotiabank3_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank3%2F2.JPG?alt=media&token=6595412c-a7bb-402b-82f2-1b5d45a9f2a2',
    scotiabank3_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank3%2F3.JPG?alt=media&token=2cab09ed-295d-4ca8-bcc3-c79c7e1c6fb8',
    scotiabank3_4: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank3%2F4.JPG?alt=media&token=6d03fe05-0387-428d-a454-0a258645bcdf',

    // scotiabank4
    scotiabank4_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank4%2F1.JPG?alt=media&token=c7a33bc9-6f80-4b0e-beca-a32347d24470',
    scotiabank4_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank4%2F2.JPG?alt=media&token=e1740aab-4339-4302-8074-744d9c1960d0',
    scotiabank4_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank4%2F3.JPG?alt=media&token=12a55438-5a4f-4ba4-8c3b-e654bf99bd4f',

    // scotiabank5
    scotiabank5_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank5%2F1.JPG?alt=media&token=fe1f53e0-240d-40c8-ad20-2b58e150073e',
    scotiabank5_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank5%2F2.JPG?alt=media&token=358dcffd-fb6e-4582-91c5-1d2b49883ee4',
    scotiabank5_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank5%2F3.JPG?alt=media&token=021319c5-2210-48fb-812e-4ddca0a89fd2',

    // scotiabank6
    scotiabank6_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank6%2F1.JPG?alt=media&token=a1abce86-5615-4260-88c0-c831473c9bd2',
    scotiabank6_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank6%2F2.JPG?alt=media&token=d81a30c9-2662-4135-a6f2-f2a6018ffce2',

    // scotiabank7
    scotiabank7_1: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank7%2F1.JPG?alt=media&token=089cfc07-2842-4192-9701-160e58e8f834',
    scotiabank7_2: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank7%2F2.JPG?alt=media&token=ad5357c2-fbd4-4697-b3bb-9a626f54d6cd',
    scotiabank7_3: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank7%2F3.JPG?alt=media&token=73f13d49-f3c8-4c27-8b2d-73977f055a6b',
    scotiabank7_4: 'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/blog%2FScotiabank7%2F4.JPG?alt=media&token=f1131799-6854-43e2-9a64-40cb480a47f7',




    // image project--------------------------------
    scotiabank_project1_1:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F1.png?alt=media&token=88c78c02-7abc-42ab-b5e2-62fd16d49d64',
    scotiabank_project1_2:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F2.png?alt=media&token=850fda73-891e-4a16-a91a-66a8cbc04b09',
    scotiabank_project1_3:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F3.png?alt=media&token=1eb4c5d5-c886-4eec-9a25-396416bfe286',
    scotiabank_project1_4:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F4.png?alt=media&token=1905ba03-010b-4b5f-a268-4cb7e145aa8e',
    scotiabank_project1_5:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F5.png?alt=media&token=fbe7173c-93b0-4b5c-888c-4ca991968746',
    scotiabank_project1_10:'https://firebasestorage.googleapis.com/v0/b/mehdi-ben-hassen-front-end-1.appspot.com/o/project%2Fscotiabank_project1%2F10.jpg?alt=media&token=2e7fe556-9368-48db-89f0-89c71242d3cc',
  };
  constructor() {

   }
}
