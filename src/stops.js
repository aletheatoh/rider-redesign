let stops = [
  {
    "name": "The Streets at Southpoint Mall",
    "lat": 35.905061,
    "lng": -78.946458,
    "code": "5956",
    "id": 4052494
  },
  {
    "name": "Erwin Rd at VA Hospital",
    "lat": 36.00832,
    "lng": -78.937767,
    "code": "1105",
    "id": 4098134
  },
  {
    "name": "Admissions Westbound (12016)",
    "lat": 35.999071,
    "lng": -78.933667,
    "code": "12016",
    "id": 4098182
  },
  {
    "name": "Science Dr at Duke Law School (12023)",
    "lat": 35.999372,
    "lng": -78.94481,
    "code": "12023",
    "id": 4098194
  },
  {
    "name": "PPS/Science Dr (12024)",
    "lat": 35.999307,
    "lng": -78.944692,
    "code": "12024",
    "id": 4098198
  },
  {
    "name": "GSRB Northbound (12026)",
    "lat": 36.006769,
    "lng": -78.941333,
    "code": "12026",
    "id": 4098206
  },
  {
    "name": "Science Drive Circle (12027)",
    "lat": 36.002848,
    "lng": -78.94191,
    "code": "12027",
    "id": 4098210
  },
  {
    "name": "Hudson Hall (12029)",
    "lat": 36.004154,
    "lng": -78.939493,
    "code": "12029",
    "id": 4098214
  },
  {
    "name": "Research Dr at Duke Clinic (12030)",
    "lat": 36.003811,
    "lng": -78.937491,
    "code": "12030",
    "id": 4098218
  },
  {
    "name": "Trent Dr/School of Nursing Southbound (12034)",
    "lat": 36.006051,
    "lng": -78.934849,
    "code": "12034",
    "id": 4098222
  },
  {
    "name": "Flowers Drive Southbound (12037)",
    "lat": 36.006868,
    "lng": -78.933027,
    "code": "12037",
    "id": 4098226
  },
  {
    "name": "Flowers Drive Northbound (12038)",
    "lat": 36.006835,
    "lng": -78.932877,
    "code": "12038",
    "id": 4098230
  },
  {
    "name": "Parking Garage III (12044)",
    "lat": 36.011238,
    "lng": -78.934952,
    "code": "12044",
    "id": 4098246
  },
  {
    "name": "Nanaline Duke Building (12046)",
    "lat": 36.005479,
    "lng": -78.940353,
    "code": "12046",
    "id": 4098254
  },
  {
    "name": "Circuit Lot Westbound (12047)",
    "lat": 36.005186,
    "lng": -78.944052,
    "code": "12047",
    "id": 4098258
  },
  {
    "name": "Circuit Lot Eastbound (12048)",
    "lat": 36.005162,
    "lng": -78.943761,
    "code": "12048",
    "id": 4098262
  },
  {
    "name": "Yearby St at H Lot Eastbound (12049)",
    "lat": 36.00529,
    "lng": -78.931042,
    "code": "12049",
    "id": 4098266
  },
  {
    "name": "Yearby St at Anderson St (12050)",
    "lat": 36.005167,
    "lng": -78.930221,
    "code": "12050",
    "id": 4098270
  },
  {
    "name": "Anderson St at Mill Village (12051)",
    "lat": 36.004142,
    "lng": -78.92983,
    "code": "12051",
    "id": 4098274
  },
  {
    "name": "Anderson St at Lewis St (12052)",
    "lat": 36.004256,
    "lng": -78.930115,
    "code": "12052",
    "id": 4098278
  },
  {
    "name": "Erwin Square (12055)",
    "lat": 36.007591,
    "lng": -78.925653,
    "code": "12055",
    "id": 4098290
  },
  {
    "name": "Alexander Ave at Pace St Eastbound (12056)",
    "lat": 36.004525,
    "lng": -78.926563,
    "code": "12056",
    "id": 4098294
  },
  {
    "name": "Erwin Mill (12064)",
    "lat": 36.006971,
    "lng": -78.923449,
    "code": "12064",
    "id": 4098310
  },
  {
    "name": "705 Broad Street (12066)",
    "lat": 36.007868,
    "lng": -78.920896,
    "code": "12066",
    "id": 4098314
  },
  {
    "name": "Circuit Dr at Towerview Rd (12067)",
    "lat": 36.001812,
    "lng": -78.947113,
    "code": "12067",
    "id": 4098318
  },
  {
    "name": "Morreene Rd at Campus Walk Ave (12068)",
    "lat": 36.008758,
    "lng": -78.954579,
    "code": "12068",
    "id": 4098322
  },
  {
    "name": "Dialysis (12070)",
    "lat": 36.00396,
    "lng": -78.954161,
    "code": "12070",
    "id": 4098326
  },
  {
    "name": "Center For Living (12073)",
    "lat": 36.000253,
    "lng": -78.956399,
    "code": "12073",
    "id": 4098334
  },
  {
    "name": "Hock Plaza (12075)",
    "lat": 36.009473,
    "lng": -78.941531,
    "code": "12075",
    "id": 4098338
  },
  {
    "name": "Yearby at Flowers (GC/DN Eastbound) (12081)",
    "lat": 36.005194,
    "lng": -78.933322,
    "code": "12081",
    "id": 4098342
  },
  {
    "name": "GC/DN Westbound (12082)",
    "lat": 36.005376,
    "lng": -78.93323,
    "code": "12082",
    "id": 4098346
  },
  {
    "name": "Anderson / Campus Drive Lot (12087)",
    "lat": 36.000664,
    "lng": -78.93034,
    "code": "12087",
    "id": 4098362
  },
  {
    "name": "Circuit Drive at Circuit Lot Extension (12092)",
    "lat": 36.004255,
    "lng": -78.945135,
    "code": "12092",
    "id": 4098366
  },
  {
    "name": "Circuit Drive at F.E.L. Labs Building (12093)",
    "lat": 36.004361,
    "lng": -78.944675,
    "code": "12093",
    "id": 4098370
  },
  {
    "name": "Hillsborough Rd at 15th St (12096)",
    "lat": 36.010208,
    "lng": -78.928608,
    "code": "12096",
    "id": 4098374
  },
  {
    "name": "LaSalle St at Circuit Lot (12102)",
    "lat": 36.006646,
    "lng": -78.945202,
    "code": "12102",
    "id": 4098378
  },
  {
    "name": "Millenium Campus Walk East (12107)",
    "lat": 36.009699,
    "lng": -78.953515,
    "code": "12107",
    "id": 4098386
  },
  {
    "name": "Campus Walk Ave at LaSalle St (12109)",
    "lat": 36.009678,
    "lng": -78.949181,
    "code": "12109",
    "id": 4098390
  },
  {
    "name": "Best Products Lot (12113)",
    "lat": 36.021022,
    "lng": -78.945556,
    "code": "12113",
    "id": 4098406
  },
  {
    "name": "Science Drive at Bryan Center Garage (12123)",
    "lat": 36.001854,
    "lng": -78.942581,
    "code": "12123",
    "id": 4098426
  },
  {
    "name": "Gross Chem / Towerview (12124)",
    "lat": 36.000652,
    "lng": -78.945225,
    "code": "12124",
    "id": 4098430
  },
  {
    "name": "Trent Dr at Duke Hospital South",
    "lat": 36.004783,
    "lng": -78.934944,
    "code": "5078",
    "id": 4098454
  },
  {
    "name": "Trent Dr at Parking Deck",
    "lat": 36.00628,
    "lng": -78.93447,
    "code": "5081",
    "id": 4098458
  },
  {
    "name": "Erwin Rd at Research Dr",
    "lat": 36.008728,
    "lng": -78.942173,
    "code": "5106",
    "id": 4098466
  },
  {
    "name": "Fulton St at Pratt St",
    "lat": 36.010778,
    "lng": -78.937067,
    "code": "5157",
    "id": 4098482
  },
  {
    "name": "Lasalle St at Grace Healthcare",
    "lat": 36.014183,
    "lng": -78.947841,
    "code": "5207",
    "id": 4098490
  },
  {
    "name": "Erwin Rd at Lambeth Cir",
    "lat": 36.006641,
    "lng": -78.9474,
    "code": "5255",
    "id": 4098502
  },
  {
    "name": "Lasalle St at Bradford Ridge Apts",
    "lat": 36.008408,
    "lng": -78.947684,
    "code": "5351",
    "id": 4098530
  },
  {
    "name": "Erwin Rd at Lenox Baker Children's Hospital",
    "lat": 36.004834,
    "lng": -78.949356,
    "code": "5471",
    "id": 4098554
  },
  {
    "name": "Flowers Dr at Duke Gardens (Northbound)",
    "lat": 36.001341,
    "lng": -78.936186,
    "code": "5480",
    "id": 4098558
  },
  {
    "name": "Erwin Rd at LaSalle St (WB)",
    "lat": 36.008103,
    "lng": -78.945642,
    "code": "5531",
    "id": 4098582
  },
  {
    "name": "Morreene Rd at Erwin Rd (WB)",
    "lat": 36.003806,
    "lng": -78.952703,
    "code": "5564",
    "id": 4098586
  },
  {
    "name": "Morreene Rd at Sherwood Dr (NB)",
    "lat": 36.007184,
    "lng": -78.9546,
    "code": "5714",
    "id": 4098622
  },
  {
    "name": "LaSalle St at Campus Walk Dr (Holly Hill Apts)",
    "lat": 36.010034,
    "lng": -78.948645,
    "code": "5718",
    "id": 4098634
  },
  {
    "name": "Trent Dr at Duke Hospital South",
    "lat": 36.004581,
    "lng": -78.934988,
    "code": "5743",
    "id": 4098650
  },
  {
    "name": "LaSalle St at Hillsborough Rd (SB)",
    "lat": 36.017715,
    "lng": -78.94562,
    "code": "5770",
    "id": 4098658
  },
  {
    "name": "LaSalle St at Hillsborough Rd (NB)",
    "lat": 36.017999,
    "lng": -78.945496,
    "code": "5786",
    "id": 4098670
  },
  {
    "name": "Erwin Rd at Duke Hospital",
    "lat": 36.008135,
    "lng": -78.937829,
    "code": "6012",
    "id": 4098738
  },
  {
    "name": "Lasalle St at Blue Crest Ln (Blue Crest Apts)",
    "lat": 36.013763,
    "lng": -78.948249,
    "code": "6045",
    "id": 4098762
  },
  {
    "name": "Fulton St at VA Hospital",
    "lat": 36.008983,
    "lng": -78.937138,
    "code": "6104",
    "id": 4098786
  },
  {
    "name": "LaSalle St at Duke Manor Apts (Outbound)",
    "lat": 36.015238,
    "lng": -78.946814,
    "code": "6169",
    "id": 4098790
  },
  {
    "name": "Chapel Dr at Duke University Rd (Alumni House)",
    "lat": 35.99787,
    "lng": -78.933476,
    "code": "6334",
    "id": 4098814
  },
  {
    "name": "Duke University Rd at Chapel Dr",
    "lat": 35.997491,
    "lng": -78.932873,
    "code": "6441",
    "id": 4098858
  },
  {
    "name": "Main St at 9th St",
    "lat": 36.006448,
    "lng": -78.922526,
    "code": "6502",
    "id": 4098866
  },
  {
    "name": "Hillsborough Rd at 9th St (13003)",
    "lat": 36.01052,
    "lng": -78.92408,
    "code": "13003",
    "id": 4112614
  },
  {
    "name": "East Campus Quad (12003)",
    "lat": 36.005977,
    "lng": -78.914718,
    "code": "12003",
    "id": 4117202
  },
  {
    "name": "DMP/Cancer Ctr (12105)",
    "lat": 36.005369,
    "lng": -78.936322,
    "code": "12105",
    "id": 4128254
  },
  {
    "name": "LaSalle St at Kangaroo St (The Heights Apts)",
    "lat": 36.012627,
    "lng": -78.948254,
    "code": "6647",
    "id": 4134094
  },
  {
    "name": "Research Dr at Erwin Rd",
    "lat": 36.007974,
    "lng": -78.942294,
    "code": "12042",
    "id": 4136130
  },
  {
    "name": "Duke Chapel",
    "lat": 36.000959,
    "lng": -78.938264,
    "code": "12018",
    "id": 4146366
  },
  {
    "name": "Smith Warehouse Westbound (12071)",
    "lat": 36.001707,
    "lng": -78.914806,
    "code": "12071",
    "id": 4158230
  },
  {
    "name": "Duke Hospital (12114)",
    "lat": 36.007633,
    "lng": -78.9375,
    "code": "12114",
    "id": 4158254
  },
  {
    "name": "Towerview at Circuit Dr (13005)",
    "lat": 36.001488,
    "lng": -78.94735,
    "code": "13005",
    "id": 4158262
  },
  {
    "name": "South Square (13006)",
    "lat": 35.966661,
    "lng": -78.96036,
    "code": "13006",
    "id": 4173276
  },
  {
    "name": "Rutherford / Main (12101)",
    "lat": 36.008433,
    "lng": -78.927897,
    "code": "12101",
    "id": 4174454
  },
  {
    "name": "Research Dr at Circuit Dr",
    "lat": 36.00656,
    "lng": -78.941308,
    "code": "6670",
    "id": 4177596
  },
  {
    "name": "LSRC Bld (12045)",
    "lat": 36.005414,
    "lng": -78.940472,
    "code": "12045",
    "id": 4186122
  },
  {
    "name": "Laundry Westbound (12005)",
    "lat": 36.001028,
    "lng": -78.918936,
    "code": "12005",
    "id": 4188198
  },
  {
    "name": "Campus Dr at Swift Ave (Westbound) (12007)",
    "lat": 36.000005,
    "lng": -78.923215,
    "code": "12007",
    "id": 4188200
  },
  {
    "name": "Campus Dr at Swift Ave (Eastbound) (12008)",
    "lat": 35.999969,
    "lng": -78.923552,
    "code": "12008",
    "id": 4188202
  },
  {
    "name": "Nasher  Westbound (12009)",
    "lat": 36.000259,
    "lng": -78.926746,
    "code": "12009",
    "id": 4188204
  },
  {
    "name": "Campus Drive At Chapel Circle Eastbound (12015)",
    "lat": 35.999002,
    "lng": -78.933362,
    "code": "12015",
    "id": 4188206
  },
  {
    "name": "Ronald Mcdonald House Eastbound (12053)",
    "lat": 36.001848,
    "lng": -78.927149,
    "code": "12053",
    "id": 4188210
  },
  {
    "name": "Swift Avenue Eastbound (12059)",
    "lat": 36.002682,
    "lng": -78.921354,
    "code": "12059",
    "id": 4188214
  },
  {
    "name": "Anderson St at Campus Dr (12086)",
    "lat": 36.000231,
    "lng": -78.93011,
    "code": "12086",
    "id": 4188216
  },
  {
    "name": "Swift Ave at Faber St (13008)",
    "lat": 36.000961,
    "lng": -78.922643,
    "code": "13008",
    "id": 4188220
  },
  {
    "name": "1901 Erwin Rd (Eastbound) (13014)",
    "lat": 36.006022,
    "lng": -78.927766,
    "code": "13014",
    "id": 4188222
  },
  {
    "name": "Campus Dr at Central Campus (Eastbound) (12010)",
    "lat": 36.000275,
    "lng": -78.926313,
    "code": "12010",
    "id": 4189276
  },
  {
    "name": "Campus/Anderson Westbound (12011)",
    "lat": 36.000096,
    "lng": -78.92982,
    "code": "12011",
    "id": 4189278
  },
  {
    "name": "Campus / Maxwell Westbound (12072)",
    "lat": 36.002688,
    "lng": -78.917667,
    "code": "12072",
    "id": 4189284
  },
  {
    "name": "Circuit Dr at North Building (12103)",
    "lat": 36.005592,
    "lng": -78.941833,
    "code": "12103",
    "id": 4190626
  },
  {
    "name": "Chapel Dr at Duke University Rd (Duke News)",
    "lat": 35.998263,
    "lng": -78.933499,
    "code": "6286",
    "id": 4191614
  },
  {
    "name": "Oregon St at Pace St (13018)",
    "lat": 36.004223,
    "lng": -78.924901,
    "code": "13018",
    "id": 4192460
  },
  {
    "name": "Bassett Dr at Grounds Lot (12001)",
    "lat": 35.9939,
    "lng": -78.943304,
    "code": "12001",
    "id": 4195800
  },
  {
    "name": "Gilbert-Addoms Westbound (12002)",
    "lat": 36.005018,
    "lng": -78.916071,
    "code": "12002",
    "id": 4195802
  },
  {
    "name": "Campus / Maxwell Eastbound (12004)",
    "lat": 36.002842,
    "lng": -78.917435,
    "code": "12004",
    "id": 4195804
  },
  {
    "name": "Laundry Eastbound (12006)",
    "lat": 36.000863,
    "lng": -78.918797,
    "code": "12006",
    "id": 4195806
  },
  {
    "name": "Campus/Anderson Eastbound (12012)",
    "lat": 36.000021,
    "lng": -78.930376,
    "code": "12012",
    "id": 4195808
  },
  {
    "name": "Science Drive at Bioscience (Southbound) (12025)",
    "lat": 36.001928,
    "lng": -78.94272,
    "code": "12025",
    "id": 4195810
  },
  {
    "name": "Fuqua School/Northbound (12060)",
    "lat": 35.998125,
    "lng": -78.945511,
    "code": "12060",
    "id": 4195812
  },
  {
    "name": "Smith Warehouse Eastbound (12077)",
    "lat": 36.001531,
    "lng": -78.914891,
    "code": "12077",
    "id": 4195814
  },
  {
    "name": "Rutherford / Hillsborough (12088)",
    "lat": 36.01011,
    "lng": -78.92754,
    "code": "12088",
    "id": 4195816
  },
  {
    "name": "East Campus Statue (12130)",
    "lat": 36.00521,
    "lng": -78.91475,
    "code": "12130",
    "id": 4195820
  },
  {
    "name": "Swift Ave at 300 Swift (13009)",
    "lat": 36.002573,
    "lng": -78.921625,
    "code": "13009",
    "id": 4195822
  },
  {
    "name": "Swift Ave at Campus Dr (13013)",
    "lat": 36.000227,
    "lng": -78.923358,
    "code": "13013",
    "id": 4195824
  },
  {
    "name": "Campus Dr at Nasher (Eastbound) (13015)",
    "lat": 35.999748,
    "lng": -78.928187,
    "code": "13015",
    "id": 4195826
  },
  {
    "name": "Science Dr at Bassett Dr Northbound (13016)",
    "lat": 35.995706,
    "lng": -78.946394,
    "code": "13016",
    "id": 4195828
  },
  {
    "name": "Devil's Bistro (13300)",
    "lat": 36.002438,
    "lng": -78.925408,
    "code": "13300",
    "id": 4197174
  },
  {
    "name": "Towerview Rd at Wannamaker (outbound) (13011)",
    "lat": 35.998219,
    "lng": -78.939914,
    "code": "13011",
    "id": 4198134
  },
  {
    "name": "Duke University Rd at Swift Ave (13020)",
    "lat": 35.997284,
    "lng": -78.92493,
    "code": "13020",
    "id": 4198136
  },
  {
    "name": "Swift Ave at Duke University Rd (13021)",
    "lat": 35.997314,
    "lng": -78.92434,
    "code": "13021",
    "id": 4198138
  },
  {
    "name": "Imperial Building",
    "lat": 35.999306,
    "lng": -78.903803,
    "code": "13022",
    "id": 4198140
  },
  {
    "name": "Towerview Rd at Edens B/C (14000)",
    "lat": 35.997652,
    "lng": -78.937926,
    "code": "14000",
    "id": 4198142
  },
  {
    "name": "Towerview Rd at Wilson Gym (14001)",
    "lat": 35.99851,
    "lng": -78.940128,
    "code": "14001",
    "id": 4198144
  },
  {
    "name": "Towerview Rd at Sanford PPS (14002)",
    "lat": 36.000026,
    "lng": -78.94387,
    "code": "14002",
    "id": 4198146
  },
  {
    "name": "LaSalle St at Belmont Apartments (Northbound)",
    "lat": 36.01073,
    "lng": -78.948477,
    "code": "12111",
    "id": 4202516
  },
  {
    "name": "Law / Towerview (6184)",
    "lat": 36.000789,
    "lng": -78.945872,
    "code": "13023",
    "id": 4209466
  },
  {
    "name": "Fuqua School/Southbound (6185)",
    "lat": 35.998369,
    "lng": -78.945535,
    "code": "13024",
    "id": 4209468
  },
  {
    "name": "R. David Thomas Center (6186)",
    "lat": 35.995722,
    "lng": -78.946609,
    "code": "13025",
    "id": 4209470
  },
  {
    "name": "Holly Ridge/Campus Walk East (5074)",
    "lat": 36.009705,
    "lng": -78.950424,
    "code": "13026",
    "id": 4209472
  },
  {
    "name": "Safeway St at Ninth St",
    "lat": 36.010356,
    "lng": -78.922193,
    "code": "13027",
    "id": 4209474
  },
  {
    "name": "Elf St at Elder St",
    "lat": 36.010064,
    "lng": -78.936045,
    "code": "13028",
    "id": 4212916
  },
  {
    "name": "American Tobacco Campus",
    "lat": 35.995691,
    "lng": -78.907705,
    "code": "13029",
    "id": 4216582
  },
  {
    "name": "Chesterfield Building",
    "lat": 35.999583,
    "lng": -78.907943,
    "code": "13032",
    "id": 4216584
  }
]

export { stops };
