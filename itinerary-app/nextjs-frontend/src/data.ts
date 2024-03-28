import { Plan } from "./interface";
import {getAllplan} from "./api"
async function fetchPlanData(): Promise<Plan[]> {
  return await getAllplan();
}
async function getData() {
  const PLANDATA: Plan[] = await fetchPlanData();
}

getData()
// export const PLANDATA:Plan[] = [
//     {
//       id: '1',
//       title: '北海道',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
//       ],
//       description: 'ほたて食べたい',
//       fromTime:new Date('2024-01-01'),
//       toTime:new Date('2024-01-01'),
//       tags:[
//         '朝食',
//         '観光'
//       ],
//       resultArea:true,
//     },
//     {
//       id: '2',
//       title: '熱海',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
//       ],
//       description: 'おさかな食堂　トロとろとろ丼',
//       fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//           '朝食',
//           '観光'
//         ],
//         resultArea:true,
//     },
//     {
//       id: '3',
//       title: '山形',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
//       ],
//       description: '山形プリンたべる',
//       fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//           '朝食',
//           '観光'
//         ],
//         resultArea:true,
//     },
//     {
//       id: '4',
//       title: '日光',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
//       ],
//       description: '日光東照宮から鬼怒川温泉',
//       fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//           '朝食',
//           '観光'
//         ],
//         resultArea:false,
//     },
//     {
//       id: '5',
//       title: 'Norway Fjord Adventures',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//       ],
//       description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
//       fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//           '朝食',
//           '観光'
//         ],
//         resultArea:false,
//     },
//     {
//       id: '6',
//       title: 'Norway Fjord Adventures',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//       ],
//       description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
//         fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//         '朝食',
//         '観光'
//       ],
//         resultArea:false,
//     },
//     {
//       id: '7',
//       title: 'Norway Fjord Adventures',
//       images: [
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
//         'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
//       ],
//       description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
//       fromTime:new Date(2023,10,31,10,10),
//         toTime:new Date(2023,10,31,11,10),
//         tags:[
//           '朝食',
//           '観光'
//         ],
//         resultArea:false,
      
//     },
//     // 他のプランのオブジェクト...
//   ];

  export const TAGDATA:string[]=[
    '朝食',
    '昼食',
    '夜食',
  ]