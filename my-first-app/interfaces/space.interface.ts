// export interface ISpace {
//         mission_name: string,
//         launch_date_local: string,
//         launch_site: {
//             site_name_long: string
//         },
//         links: {
//             article_link: null;
//             video_link: string
//         },
//         rocket: {
//             rocket_name: string;
//             first_stage:  {
//                 cores:Icores
//             };
//             second_stage: ISecondStage;
//         }
    
// }

// interface  Icores {
//     [index: number]:IFirstStage;
//   }

// interface IFirstStage
//    {flight: number; core: { reuse_count: number; status: string;} }
    


// interface ISecondStage {
//     payloads:  { payload_type: string;payload_mass_kg: number;payload_mass_lbs: number;}[]
// }

export interface ISpace {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: null;
        video_link: string
    },
    rocket: {
        rocket_name: string;
        first_stage:  {
            cores:IFirstStage;
        };
        second_stage: ISecondStage;
    }

}

interface IFirstStage{
       flight: number; 
       core: { reuse_count: number; status: string;}
}
interface ISecondStage {
    payloads:  { 
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
    }
}

//User for function
export interface IUser{
    name: string;
    age: number;
    gender: string;
}
