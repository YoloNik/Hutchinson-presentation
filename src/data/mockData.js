import { tokens } from '../theme';

export const mockDataTeam = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    access: 'admin',
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    age: 42,
    phone: '(421)314-2288',
    access: 'manager',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    age: 45,
    phone: '(422)982-6739',
    access: 'user',
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    age: 16,
    phone: '(921)425-6742',
    access: 'admin',
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    access: 'user',
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    access: 'manager',
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    access: 'user',
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    access: 'user',
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'admin',
  },
];

export const mockDataContacts = [
  {
    id: 1,
    district: '02c10',
    workPlace: 'Form',
    part: 'M41',
    side: 'RH',
    quantityProd: 843,
    ok: 833,
    nok: 10,
    quantityIssue: 5,
  },
  {
    id: 2,
    district: '02c10',
    workPlace: 'Form',
    part: 'M51',
    side: 'RH',
    quantityProd: 843,
    ok: 833,
    nok: 10,
    quantityIssue: 1,
  },
  {
    id: 3,
    district: '02c10',
    workPlace: 'Cleaning',
    part: 'RD',
    side: 'RH',
    quantityProd: 843,
    ok: 833,
    nok: 10,
    quantityIssue: 2,
  },
  {
    id: 4,
    district: '02c10',
    workPlace: 'Cut',
    part: 'P3C',
    side: 'RH',
    quantityProd: 953,
    ok: 833,
    nok: 10,
    quantityIssue: 1,
  },
  {
    id: 5,
    district: '02с34',
    workPlace: 'Cleaning',
    part: 'RD',
    side: 'RH',
    quantityProd: 156,
    ok: 833,
    nok: 10,
    quantityIssue: 20,
  },
  {
    id: 6,
    district: '02c10',
    workPlace: 'Form',
    part: 'M5',
    side: 'RH',
    quantityProd: 185,
    ok: 833,
    nok: 10,
    quantityIssue: 2,
  },
  {
    id: 7,
    district: '02c10',
    workPlace: 'Transfer',
    part: 'P11',
    side: 'RH',
    quantityProd: 843,
    ok: 833,
    nok: 10,

    quantityIssue: 2,
  },
  {
    id: 8,
    district: '02c10',
    workPlace: 'Cleaning',
    part: 'RD',
    side: 'RH',
    quantityProd: 843,
    ok: 833,
    nok: 10,
    quantityIssue: 2,
  },
];

export const mockTransactions = [
  {
    txId: '01e4dsa',
    user: 'johndoe',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '0315dsaa',
    user: 'jackdower',
    date: '2022-04-01',
    cost: '133.45',
  },
  {
    txId: '01e4dsa',
    user: 'aberdohnny',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '51034szv',
    user: 'goodmanave',
    date: '2022-11-05',
    cost: '200.95',
  },
  {
    txId: '0a123sb',
    user: 'stevebower',
    date: '2022-11-02',
    cost: '13.55',
  },
  {
    txId: '01e4dsa',
    user: 'aberdohnny',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '120s51a',
    user: 'wootzifer',
    date: '2019-04-15',
    cost: '24.20',
  },
  {
    txId: '0315dsaa',
    user: 'jackdower',
    date: '2022-04-01',
    cost: '133.45',
  },
];

export const mockBarData = [
  {
    district: 'Q3',
    'FD LH': 285,
    'FD LH color': 'hsl(192, 70%, 50%)',
    'FD RH': 272,
    'FD RH color': 'hsl(334, 70%, 50%)',
    'RD LH': 289,
    'RD LH color': 'hsl(295, 70%, 50%)',
    'RD RH': 300,
    'RD RH color': 'hsl(351, 70%, 50%)',
  },
  {
    district: 'Q4',
    'FD LH': 267,
    'FD LH color': 'hsl(192, 70%, 50%)',
    'FD RH': 255,
    'FD RH color': 'hsl(334, 70%, 50%)',
    'RD LH': 300,
    'RD LH color': 'hsl(295, 70%, 50%)',
    'RD RH': 300,
    'RD RH color': 'hsl(351, 70%, 50%)',
  },
  {
    district: 'C-BEV',
    'FD LH': 125,
    'FD LH color': 'hsl(192, 70%, 50%)',
    'FD RH': 176,
    'FD RH color': 'hsl(334, 70%, 50%)',
    'RD LH': 115,
    'RD LH color': 'hsl(295, 70%, 50%)',
    'RD RH': 131,
    'RD RH color': 'hsl(351, 70%, 50%)',
  },
];

export const mockPieData = [
  {
    id: 'hack',
    label: 'hack',
    value: 239,
    color: 'hsl(104, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 170,
    color: 'hsl(162, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 322,
    color: 'hsl(291, 70%, 50%)',
  },
  {
    id: 'lisp',
    label: 'lisp',
    value: 503,
    color: 'hsl(229, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 584,
    color: 'hsl(344, 70%, 50%)',
  },
];

export const mockLineData = [
  {
    id: 'fact',
    color: 'hsl(25, 70%, 50%)',
    data: [
      {
        x: 'Q3 FD LH',
        y: 2540,
      },
      {
        x: 'Q3 FD RH ',
        y: 3500,
      },
      {
        x: 'Q3 RD LH ',
        y: 2800,
      },
      {
        x: 'Q3 RD RH  ',
        y: 1965,
      },
      {
        x: 'Q4 FD LH',
        y: 2985,
      },
      {
        x: 'Q4 FD RH ',
        y: 3200,
      },
      {
        x: 'Q4 RD LH ',
        y: 3150,
      },
      {
        x: 'Q4 RD RH  ',
        y: 3002,
      },
    ],
  },
  {
    id: 'plan',
    color: 'hsl(255, 70%, 50%)',
    data: [
      {
        x: 'Q3 FD LH',
        y: 3000,
      },
      {
        x: 'Q3 FD RH ',
        y: 3000,
      },
      {
        x: 'Q3 RD LH ',
        y: 3000,
      },
      {
        x: 'Q3 RD RH  ',
        y: 3000,
      },
      {
        x: 'Q4 FD LH',
        y: 3000,
      },
      {
        x: 'Q4 FD RH ',
        y: 3000,
      },
      {
        x: 'Q4 RD LH ',
        y: 3000,
      },
      {
        x: 'Q4 RD RH  ',
        y: 3000,
      },
    ],
  },
];
