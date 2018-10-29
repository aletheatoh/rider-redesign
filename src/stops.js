let stops = [
  {
    "name": "The Streets at Southpoint Mall",
    "lat": 35.905061,
    "lng": -78.946458
  },
  {
    "name": "Erwin Rd at VA Hospital",
    "lat": 36.00832,
    "lng": -78.937767
  },
  {
    "name": "Admissions Westbound (12016)",
    "lat": 35.999071,
    "lng": -78.933667
  },
  {
    "name": "Science Dr at Duke Law School (12023)",
    "lat": 35.999372,
    "lng": -78.94481
  },
  {
    "name": "PPS/Science Dr (12024)",
    "lat": 35.999307,
    "lng": -78.944692
  },
  {
    "name": "GSRB Northbound (12026)",
    "lat": 36.006769,
    "lng": -78.941333
  },
  {
    "name": "Science Drive Circle (12027)",
    "lat": 36.002848,
    "lng": -78.94191
  },
  {
    "name": "Hudson Hall (12029)",
    "lat": 36.004154,
    "lng": -78.939493
  },
  {
    "name": "Research Dr at Duke Clinic (12030)",
    "lat": 36.003811,
    "lng": -78.937491
  },
  {
    "name": "Trent Dr/School of Nursing Southbound (12034)",
    "lat": 36.006051,
    "lng": -78.934849
  },
  {
    "name": "Flowers Drive Southbound (12037)",
    "lat": 36.006868,
    "lng": -78.933027
  },
  {
    "name": "Flowers Drive Northbound (12038)",
    "lat": 36.006835,
    "lng": -78.932877
  },
  {
    "name": "Parking Garage III (12044)",
    "lat": 36.011238,
    "lng": -78.934952
  },
  {
    "name": "Nanaline Duke Building (12046)",
    "lat": 36.005479,
    "lng": -78.940353
  },
  {
    "name": "Circuit Lot Westbound (12047)",
    "lat": 36.005186,
    "lng": -78.944052
  },
  {
    "name": "Circuit Lot Eastbound (12048)",
    "lat": 36.005162,
    "lng": -78.943761
  },
  {
    "name": "Yearby St at H Lot Eastbound (12049)",
    "lat": 36.00529,
    "lng": -78.931042
  },
  {
    "name": "Yearby St at Anderson St (12050)",
    "lat": 36.005167,
    "lng": -78.930221
  },
  {
    "name": "Anderson St at Mill Village (12051)",
    "lat": 36.004142,
    "lng": -78.92983
  },
  {
    "name": "Anderson St at Lewis St (12052)",
    "lat": 36.004256,
    "lng": -78.930115
  },
  {
    "name": "Erwin Square (12055)",
    "lat": 36.007591,
    "lng": -78.925653
  },
  {
    "name": "Alexander Ave at Pace St Eastbound (12056)",
    "lat": 36.004525,
    "lng": -78.926563
  },
  {
    "name": "Erwin Mill (12064)",
    "lat": 36.006971,
    "lng": -78.923449
  },
  {
    "name": "705 Broad Street (12066)",
    "lat": 36.007868,
    "lng": -78.920896
  },
  {
    "name": "Circuit Dr at Towerview Rd (12067)",
    "lat": 36.001812,
    "lng": -78.947113
  },
  {
    "name": "Morreene Rd at Campus Walk Ave (12068)",
    "lat": 36.008758,
    "lng": -78.954579
  },
  {
    "name": "Dialysis (12070)",
    "lat": 36.00396,
    "lng": -78.954161
  },
  {
    "name": "Center For Living (12073)",
    "lat": 36.000253,
    "lng": -78.956399
  },
  {
    "name": "Hock Plaza (12075)",
    "lat": 36.009473,
    "lng": -78.941531
  },
  {
    "name": "Yearby at Flowers (GC/DN Eastbound) (12081)",
    "lat": 36.005194,
    "lng": -78.933322
  },
  {
    "name": "GC/DN Westbound (12082)",
    "lat": 36.005376,
    "lng": -78.93323
  },
  {
    "name": "Anderson / Campus Drive Lot (12087)",
    "lat": 36.000664,
    "lng": -78.93034
  },
  {
    "name": "Circuit Drive at Circuit Lot Extension (12092)",
    "lat": 36.004255,
    "lng": -78.945135
  },
  {
    "name": "Circuit Drive at F.E.L. Labs Building (12093)",
    "lat": 36.004361,
    "lng": -78.944675
  },
  {
    "name": "Hillsborough Rd at 15th St (12096)",
    "lat": 36.010208,
    "lng": -78.928608
  },
  {
    "name": "LaSalle St at Circuit Lot (12102)",
    "lat": 36.006646,
    "lng": -78.945202
  },
  {
    "name": "Millenium Campus Walk East (12107)",
    "lat": 36.009699,
    "lng": -78.953515
  },
  {
    "name": "Campus Walk Ave at LaSalle St (12109)",
    "lat": 36.009678,
    "lng": -78.949181
  },
  {
    "name": "Best Products Lot (12113)",
    "lat": 36.021022,
    "lng": -78.945556
  },
  {
    "name": "Science Drive at Bryan Center Garage (12123)",
    "lat": 36.001854,
    "lng": -78.942581
  },
  {
    "name": "Gross Chem / Towerview (12124)",
    "lat": 36.000652,
    "lng": -78.945225
  },
  {
    "name": "Trent Dr at Duke Hospital South",
    "lat": 36.004783,
    "lng": -78.934944
  },
  {
    "name": "Trent Dr at Parking Deck",
    "lat": 36.00628,
    "lng": -78.93447
  },
  {
    "name": "Erwin Rd at Research Dr",
    "lat": 36.008728,
    "lng": -78.942173
  },
  {
    "name": "Fulton St at Pratt St",
    "lat": 36.010778,
    "lng": -78.937067
  },
  {
    "name": "Lasalle St at Grace Healthcare",
    "lat": 36.014183,
    "lng": -78.947841
  },
  {
    "name": "Erwin Rd at Lambeth Cir",
    "lat": 36.006641,
    "lng": -78.9474
  },
  {
    "name": "Lasalle St at Bradford Ridge Apts",
    "lat": 36.008408,
    "lng": -78.947684
  },
  {
    "name": "Erwin Rd at Lenox Baker Children's Hospital",
    "lat": 36.004834,
    "lng": -78.949356
  },
  {
    "name": "Flowers Dr at Duke Gardens (Northbound)",
    "lat": 36.001341,
    "lng": -78.936186
  },
  {
    "name": "Erwin Rd at LaSalle St (WB)",
    "lat": 36.008103,
    "lng": -78.945642
  },
  {
    "name": "Morreene Rd at Erwin Rd (WB)",
    "lat": 36.003806,
    "lng": -78.952703
  },
  {
    "name": "Morreene Rd at Sherwood Dr (NB)",
    "lat": 36.007184,
    "lng": -78.9546
  },
  {
    "name": "LaSalle St at Campus Walk Dr (Holly Hill Apts)",
    "lat": 36.010034,
    "lng": -78.948645
  },
  {
    "name": "Trent Dr at Duke Hospital South",
    "lat": 36.004581,
    "lng": -78.934988
  },
  {
    "name": "LaSalle St at Hillsborough Rd (SB)",
    "lat": 36.017715,
    "lng": -78.94562
  },
  {
    "name": "LaSalle St at Hillsborough Rd (NB)",
    "lat": 36.017999,
    "lng": -78.945496
  },
  {
    "name": "Erwin Rd at Duke Hospital",
    "lat": 36.008135,
    "lng": -78.937829
  },
  {
    "name": "Lasalle St at Blue Crest Ln (Blue Crest Apts)",
    "lat": 36.013763,
    "lng": -78.948249
  },
  {
    "name": "Fulton St at VA Hospital",
    "lat": 36.008983,
    "lng": -78.937138
  },
  {
    "name": "LaSalle St at Duke Manor Apts (Outbound)",
    "lat": 36.015238,
    "lng": -78.946814
  },
  {
    "name": "Chapel Dr at Duke University Rd (Alumni House)",
    "lat": 35.99787,
    "lng": -78.933476
  },
  {
    "name": "Duke University Rd at Chapel Dr",
    "lat": 35.997491,
    "lng": -78.932873
  },
  {
    "name": "Main St at 9th St",
    "lat": 36.006448,
    "lng": -78.922526
  },
  {
    "name": "Hillsborough Rd at 9th St (13003)",
    "lat": 36.01052,
    "lng": -78.92408
  },
  {
    "name": "East Campus Quad (12003)",
    "lat": 36.005977,
    "lng": -78.914718
  },
  {
    "name": "DMP/Cancer Ctr (12105)",
    "lat": 36.005369,
    "lng": -78.936322
  },
  {
    "name": "LaSalle St at Kangaroo St (The Heights Apts)",
    "lat": 36.012627,
    "lng": -78.948254
  },
  {
    "name": "Research Dr at Erwin Rd",
    "lat": 36.007974,
    "lng": -78.942294
  },
  {
    "name": "Duke Chapel",
    "lat": 36.000959,
    "lng": -78.938264
  },
  {
    "name": "Smith Warehouse Westbound (12071)",
    "lat": 36.001707,
    "lng": -78.914806
  },
  {
    "name": "Duke Hospital (12114)",
    "lat": 36.007633,
    "lng": -78.9375
  },
  {
    "name": "Towerview at Circuit Dr (13005)",
    "lat": 36.001488,
    "lng": -78.94735
  },
  {
    "name": "South Square (13006)",
    "lat": 35.966661,
    "lng": -78.96036
  },
  {
    "name": "Rutherford / Main (12101)",
    "lat": 36.008433,
    "lng": -78.927897
  },
  {
    "name": "Research Dr at Circuit Dr",
    "lat": 36.00656,
    "lng": -78.941308
  },
  {
    "name": "LSRC Bld (12045)",
    "lat": 36.005414,
    "lng": -78.940472
  },
  {
    "name": "Laundry Westbound (12005)",
    "lat": 36.001028,
    "lng": -78.918936
  },
  {
    "name": "Campus Dr at Swift Ave (Westbound) (12007)",
    "lat": 36.000005,
    "lng": -78.923215
  },
  {
    "name": "Campus Dr at Swift Ave (Eastbound) (12008)",
    "lat": 35.999969,
    "lng": -78.923552
  },
  {
    "name": "Nasher  Westbound (12009)",
    "lat": 36.000259,
    "lng": -78.926746
  },
  {
    "name": "Campus Drive At Chapel Circle Eastbound (12015)",
    "lat": 35.999002,
    "lng": -78.933362
  },
  {
    "name": "Ronald Mcdonald House Eastbound (12053)",
    "lat": 36.001848,
    "lng": -78.927149
  },
  {
    "name": "Swift Avenue Eastbound (12059)",
    "lat": 36.002682,
    "lng": -78.921354
  },
  {
    "name": "Anderson St at Campus Dr (12086)",
    "lat": 36.000231,
    "lng": -78.93011
  },
  {
    "name": "Swift Ave at Faber St (13008)",
    "lat": 36.000961,
    "lng": -78.922643
  },
  {
    "name": "1901 Erwin Rd (Eastbound) (13014)",
    "lat": 36.006022,
    "lng": -78.927766
  },
  {
    "name": "Campus Dr at Central Campus (Eastbound) (12010)",
    "lat": 36.000275,
    "lng": -78.926313
  },
  {
    "name": "Campus/Anderson Westbound (12011)",
    "lat": 36.000096,
    "lng": -78.92982
  },
  {
    "name": "Campus / Maxwell Westbound (12072)",
    "lat": 36.002688,
    "lng": -78.917667
  },
  {
    "name": "Circuit Dr at North Building (12103)",
    "lat": 36.005592,
    "lng": -78.941833
  },
  {
    "name": "Chapel Dr at Duke University Rd (Duke News)",
    "lat": 35.998263,
    "lng": -78.933499
  },
  {
    "name": "Oregon St at Pace St (13018)",
    "lat": 36.004223,
    "lng": -78.924901
  },
  {
    "name": "Bassett Dr at Grounds Lot (12001)",
    "lat": 35.9939,
    "lng": -78.943304
  },
  {
    "name": "Gilbert-Addoms Westbound (12002)",
    "lat": 36.005018,
    "lng": -78.916071
  },
  {
    "name": "Campus / Maxwell Eastbound (12004)",
    "lat": 36.002842,
    "lng": -78.917435
  },
  {
    "name": "Laundry Eastbound (12006)",
    "lat": 36.000863,
    "lng": -78.918797
  },
  {
    "name": "Campus/Anderson Eastbound (12012)",
    "lat": 36.000021,
    "lng": -78.930376
  },
  {
    "name": "Science Drive at Bioscience (Southbound) (12025)",
    "lat": 36.001928,
    "lng": -78.94272
  },
  {
    "name": "Fuqua School/Northbound (12060)",
    "lat": 35.998125,
    "lng": -78.945511
  },
  {
    "name": "Smith Warehouse Eastbound (12077)",
    "lat": 36.001531,
    "lng": -78.914891
  },
  {
    "name": "Rutherford / Hillsborough (12088)",
    "lat": 36.01011,
    "lng": -78.92754
  },
  {
    "name": "East Campus Statue (12130)",
    "lat": 36.00521,
    "lng": -78.91475
  },
  {
    "name": "Swift Ave at 300 Swift (13009)",
    "lat": 36.002573,
    "lng": -78.921625
  },
  {
    "name": "Swift Ave at Campus Dr (13013)",
    "lat": 36.000227,
    "lng": -78.923358
  },
  {
    "name": "Campus Dr at Nasher (Eastbound) (13015)",
    "lat": 35.999748,
    "lng": -78.928187
  },
  {
    "name": "Science Dr at Bassett Dr Northbound (13016)",
    "lat": 35.995706,
    "lng": -78.946394
  },
  {
    "name": "Devil's Bistro (13300)",
    "lat": 36.002438,
    "lng": -78.925408
  },
  {
    "name": "Towerview Rd at Wannamaker (outbound) (13011)",
    "lat": 35.998219,
    "lng": -78.939914
  },
  {
    "name": "Duke University Rd at Swift Ave (13020)",
    "lat": 35.997284,
    "lng": -78.92493
  },
  {
    "name": "Swift Ave at Duke University Rd (13021)",
    "lat": 35.997314,
    "lng": -78.92434
  },
  {
    "name": "Imperial Building",
    "lat": 35.999306,
    "lng": -78.903803
  },
  {
    "name": "Towerview Rd at Edens B/C (14000)",
    "lat": 35.997652,
    "lng": -78.937926
  },
  {
    "name": "Towerview Rd at Wilson Gym (14001)",
    "lat": 35.99851,
    "lng": -78.940128
  },
  {
    "name": "Towerview Rd at Sanford PPS (14002)",
    "lat": 36.000026,
    "lng": -78.94387
  },
  {
    "name": "LaSalle St at Belmont Apartments (Northbound)",
    "lat": 36.01073,
    "lng": -78.948477
  },
  {
    "name": "Law / Towerview (6184)",
    "lat": 36.000789,
    "lng": -78.945872
  },
  {
    "name": "Fuqua School/Southbound (6185)",
    "lat": 35.998369,
    "lng": -78.945535
  },
  {
    "name": "R. David Thomas Center (6186)",
    "lat": 35.995722,
    "lng": -78.946609
  },
  {
    "name": "Holly Ridge/Campus Walk East (5074)",
    "lat": 36.009705,
    "lng": -78.950424
  },
  {
    "name": "Safeway St at Ninth St",
    "lat": 36.010356,
    "lng": -78.922193
  },
  {
    "name": "Elf St at Elder St",
    "lat": 36.010064,
    "lng": -78.936045
  },
  {
    "name": "American Tobacco Campus",
    "lat": 35.995691,
    "lng": -78.907705
  },
  {
    "name": "Chesterfield Building",
    "lat": 35.999583,
    "lng": -78.907943
  }
]

export { stops };
