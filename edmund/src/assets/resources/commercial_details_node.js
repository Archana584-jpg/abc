export const provide_commercial_details = {
   id: "provide_commercial_details",
   name: "Provide Commercial Details",
   description: {
      title: { text: "Provide Commercial Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide your basic business details.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/commerical_details.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      content: {
         form: {
            description: {
               title: { text: "Business details", className: "mb-4 font-normal text-base" },
            },
            properties: {
               layout: "vertical",
               style: {
                  col: { xs: 24 },
               },
            },
            style: { col: { xs: 24 } },
            fields: [
               {
                  name: "business_category",
                  label: { text: "Business category", className: "" },
                  placeHolder: { text: "Search Business Category", className: "" },
                  type: "SELECT",
                  impactingFields: ["business_sub_category"],
                  options: [
                     { label: "Travel & Entertainment", value: "Travel & Entertainment" },
                     { label: "Groceries", value: "Groceries" },
                     { label: "Healthcare", value: "Healthcare" },
                     { label: "Education", value: "Education" },
                     { label: "Insurance", value: "Insurance" },
                     { label: "Government", value: "Government" },
                     { label: "Utilities", value: "Utilities" },
                     { label: "Fuel", value: "Fuel" },
                     { label: "Communication", value: "Communication" },
                     { label: "Entertainment", value: "Entertainment" },
                     {
                        label: "Professional and Financial Services",
                        value: "Professional and Financial Services",
                     },
                     { label: "Restaurants", value: "Restaurants" },
                     { label: "Others", value: "Others" },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pr-2 md:pr-2",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "IS_EMPTY",
                        },
                     ],
                  },
                  options: [],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Travel & Entertainment",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Local and Suburban Commuter PassengerTransportation": "4111",
                                 "Passenger Railways": "4112",
                                 "Taxicabs and Limousines": "4121",
                                 "Bus Lines": "4131",
                                 "Airports, Flying Fields, and Airport Terminals": "4582",
                                 "Travel Agencies and Tour Operators": "4722",
                                 "Lodging – Hotels, Motels, Resorts, ‘Non-branded’": "7011",
                                 "Automobile Rental Agency": "7512",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Local and Suburban Commuter PassengerTransportation",
                        value: "Local and Suburban Commuter PassengerTransportation",
                     },
                     {
                        label: "Passenger Railways",
                        value: "Passenger Railways",
                     },
                     {
                        label: "Taxicabs and Limousines",
                        value: "Taxicabs and Limousines",
                     },
                     {
                        label: "Bus Lines",
                        value: "Bus Lines",
                     },
                     {
                        label: "Airports, Flying Fields, and Airport Terminals",
                        value: "Airports, Flying Fields, and Airport Terminals",
                     },
                     {
                        label: "Travel Agencies and Tour Operators",
                        value: "Travel Agencies and Tour Operators",
                     },
                     {
                        label: "Lodging – Hotels, Motels, Resorts, ‘Non-branded’",
                        value: "Lodging – Hotels, Motels, Resorts, ‘Non-branded’",
                     },
                     {
                        label: "Automobile Rental Agency",
                        value: "Automobile Rental Agency",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Groceries",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Grocery Stores and Supermarkets": "5411",
                                 "Freezer and Locker Meat Provisioners": "5422",
                                 "Candy, Nut, and Confectionery Stores": "5441",
                                 "Dairy Products Stores": "5451",
                                 Bakeries: "5462",
                                 "Miscellaneous Food Stores – Convenience Stores and Specialty Markets": "5499",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Grocery Stores and Supermarkets",
                        value: "Grocery Stores and Supermarkets",
                     },
                     {
                        label: "Freezer and Locker Meat Provisioners",
                        value: "Freezer and Locker Meat Provisioners",
                     },
                     {
                        label: "Candy, Nut, and Confectionery Stores",
                        value: "Candy, Nut, and Confectionery Stores",
                     },
                     {
                        label: "Dairy Products Stores",
                        value: "Dairy Products Stores",
                     },
                     {
                        label: "Bakeries",
                        value: "Bakeries",
                     },
                     {
                        label: "Miscellaneous Food Stores – Convenience Stores and Specialty Markets",
                        value: "Miscellaneous Food Stores – Convenience Stores and Specialty Markets",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Healthcare",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Drug Store and Pharamcies": "5912",
                                 "Doctors and Physicians (Not Elsewhere Classified)": "8011",
                                 "Dentists and Orthodontists": "8021",
                                 Osteopaths: "8031",
                                 Chiropractors: "8041",
                                 "Optometrists and Ophthalmologists": "8042",
                                 "Podiatrists and Chiropodists": "8049",
                                 "Nursing and Personal Care Facilities": "8050",
                                 Hospitals: "8062",
                                 "Medical and Dental Laboratories": "8071",
                                 "Medical Services and Health Practitioners (Not Elsewhere Classified)": "8099",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Drug Store and Pharamcies",
                        value: "Drug Store and Pharamcies",
                     },
                     {
                        label: "Doctors and Physicians (Not Elsewhere Classified)",
                        value: "Doctors and Physicians (Not Elsewhere Classified)",
                     },
                     {
                        label: "Dentists and Orthodontists",
                        value: "Dentists and Orthodontists",
                     },
                     {
                        label: "Osteopaths",
                        value: "Osteopaths",
                     },
                     {
                        label: "Chiropractors",
                        value: "Chiropractors",
                     },
                     {
                        label: "Optometrists and Ophthalmologists",
                        value: "Optometrists and Ophthalmologists",
                     },
                     {
                        label: "Podiatrists and Chiropodists",
                        value: "Podiatrists and Chiropodists",
                     },
                     {
                        label: "Nursing and Personal Care Facilities",
                        value: "Nursing and Personal Care Facilities",
                     },
                     {
                        label: "Hospitals",
                        value: "Hospitals",
                     },
                     {
                        label: "Medical and Dental Laboratories",
                        value: "Medical and Dental Laboratories",
                     },
                     {
                        label: "Medical Services and Health Practitioners (Not Elsewhere Classified)",
                        value: "Medical Services and Health Practitioners (Not Elsewhere Classified)",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Education",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Dance Halls, Schools, and Studios": "7911",
                                 "Schools, Elementary and Secondary": "8211",
                                 "Schools, Professional": "8220",
                                 Universities: "8220",
                                 "Schools, Correspondence": "8241",
                                 "Schools, Business and Secretarial": "8244",
                                 "Schools, Trade and Vocational": "8249",
                                 "Schools—not elsewhere classified": "8299",
                                 "Child Care Services": "8351",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Dance Halls, Schools, and Studios",
                        value: "Dance Halls, Schools, and Studios",
                     },
                     {
                        label: "Schools, Elementary and Secondary",
                        value: "Schools, Elementary and Secondary",
                     },
                     {
                        label: "Schools, Professional",
                        value: "Schools, Professional",
                     },
                     {
                        label: "Universities",
                        value: "Universities",
                     },
                     {
                        label: "Schools, Correspondence",
                        value: "Schools, Correspondence",
                     },
                     {
                        label: "Schools, Business and Secretarial",
                        value: "Schools, Business and Secretarial",
                     },
                     {
                        label: "Schools, Trade and Vocational",
                        value: "Schools, Trade and Vocational",
                     },
                     {
                        label: "Schools—not elsewhere classified",
                        value: "Schools—not elsewhere classified",
                     },
                     {
                        label: "Child Care Services",
                        value: "Child Care Services",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Insurance",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Insurance Sales, Underwriting, and Premiums": "6300",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Insurance Sales, Underwriting, and Premiums",
                        value: "Insurance Sales, Underwriting, and Premiums",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Government",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Court Costs, Including Alimony and Child Support": "9211",
                                 Fines: "9222",
                                 "Tax Payments": "9311",
                                 "Government Services": "9399",
                                 "Postal Services – Government Only": "9402",
                                 "Intra Government payment": "9405",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Court Costs, Including Alimony and Child Support",
                        value: "Court Costs, Including Alimony and Child Support",
                     },
                     {
                        label: "Fines",
                        value: "Fines",
                     },
                     {
                        label: "Tax Payments",
                        value: "Tax Payments",
                     },
                     {
                        label: "Government Services",
                        value: "Government Services",
                     },
                     {
                        label: "Postal Services – Government Only",
                        value: "Postal Services – Government Only",
                     },
                     {
                        label: "Intra Government payment",
                        value: "Intra Government payment",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Utilities",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Utilities – Electric, Gas, Water, and Sanitary, Waste management etc.": "4900",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Utilities – Electric, Gas, Water, and Sanitary, Waste management etc.",
                        value: "Utilities – Electric, Gas, Water, and Sanitary, Waste management etc.",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Fuel",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Service Stations (with or without Ancillary Services)": "5541",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Service Stations (with or without Ancillary Services)",
                        value: "Service Stations (with or without Ancillary Services)",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Communication",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Telecommunication Services including but not limited to prepaid phone": "4814",
                                 "Cable, Satellite, and Other Pay Television and Radio Services": "4899",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Telecommunication Services including but not limited to prepaid phone",
                        value: "Telecommunication Services including but not limited to prepaid phone",
                     },
                     {
                        label: "Cable, Satellite, and Other Pay Television and Radio Services",
                        value: "Cable, Satellite, and Other Pay Television and Radio Services",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Entertainment",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Orchestras—not elsewhere classified": "7929",
                                 "Bowling Alleys": "7933",
                                 "Sports, Commercial, Professional Clubs; Sports Promoters": "7941",
                                 "Golf Courses, Public": "7992",
                                 "Amusement Parks": "7996",
                                 "Clubs—Membership (Athletic, Recreation, Sports), Private Golf Courses": "7997",
                                 "Recreation Services—not elsewhere classified": "7999",
                                 "Theatrical Producers (Except Motion Pictures) and\nTicket Agencies": "7922",
                                 "Video Amusement Game Supplies": "7993",
                                 "Video Game Arcades/Establishments": "7994",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Orchestras—not elsewhere classified",
                        value: "Orchestras—not elsewhere classified",
                     },
                     {
                        label: "Bowling Alleys",
                        value: "Bowling Alleys",
                     },
                     {
                        label: "Sports, Commercial, Professional Clubs",
                        value: "Sports, Commercial, Professional Clubs",
                     },
                     {
                        label: "Sports Promoters",
                        value: "Sports Promoters",
                     },
                     {
                        label: "Golf Courses, Public",
                        value: "Golf Courses, Public",
                     },
                     {
                        label: "Amusement Parks",
                        value: "Amusement Parks",
                     },
                     {
                        label: "Clubs—Membership (Athletic, Recreation, Sports), Private Golf Courses",
                        value: "Clubs—Membership (Athletic, Recreation, Sports), Private Golf Courses",
                     },
                     {
                        label: "Recreation Services—not elsewhere classified",
                        value: "Recreation Services—not elsewhere classified",
                     },
                     {
                        label: "Theatrical Producers (Except Motion Pictures) and\nTicket Agencies",
                        value: "Theatrical Producers (Except Motion Pictures) and\nTicket Agencies",
                     },
                     {
                        label: "Video Amusement Game Supplies",
                        value: "Video Amusement Game Supplies",
                     },
                     {
                        label: "Video Game Arcades/Establishments",
                        value: "Video Game Arcades/Establishments",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Professional and Financial Services",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "Publishing and Printing, Miscellaneous2": "2741",
                                 Seamstresses: "5697",
                                 "Photographic Studios": "7221",
                                 "Tax Preparation Service": "7276",
                                 "Counseling Services": "7277",
                                 "Advertising Services": "7311",
                                 "Art, Commercial": "7333",
                                 "Blueprinting Services": "7338",
                                 "Stenographic and Secretarial Support Services": "7339",
                                 "Employment Agencies": "7361",
                                 "Computer Programming Services": "7372",
                                 "Consulting Services": "7392",
                                 "Security Services including Armored Cars and Guard Dogs": "7393",
                                 "Business Services—not elsewhere classified": "7399",
                                 "Air Conditioning Repair Shops": "7623",
                                 "Appliance Repair Shops, Electrical and Small": "7629",
                                 "Agricultural Cooperatives": "763",
                                 "Clock Repair Shops": "7631",
                                 "Furniture—Reupholstery and Repair, Refinishing": "7641",
                                 "Religious Organizations": "8661",
                                 "Architectural Services": "8911",
                                 "Accounting Services": "8931",
                                 Auctions: "8999",
                                 "TESTINGLABORATORY-NONMED": "8734",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Publishing and Printing, Miscellaneous2",
                        value: "Publishing and Printing, Miscellaneous2",
                     },
                     {
                        label: "Seamstresses",
                        value: "Seamstresses",
                     },
                     {
                        label: "Photographic Studios",
                        value: "Photographic Studios",
                     },
                     {
                        label: "Tax Preparation Service",
                        value: "Tax Preparation Service",
                     },
                     {
                        label: "Counseling Services",
                        value: "Counseling Services",
                     },
                     {
                        label: "Advertising Services",
                        value: "Advertising Services",
                     },
                     {
                        label: "Art, Commercial",
                        value: "Art, Commercial",
                     },
                     {
                        label: "Blueprinting Services",
                        value: "Blueprinting Services",
                     },
                     {
                        label: "Stenographic and Secretarial Support Services",
                        value: "Stenographic and Secretarial Support Services",
                     },
                     {
                        label: "Employment Agencies",
                        value: "Employment Agencies",
                     },
                     {
                        label: "Computer Programming Services",
                        value: "Computer Programming Services",
                     },
                     {
                        label: "Consulting Services",
                        value: "Consulting Services",
                     },
                     {
                        label: "Security Services including Armored Cars and Guard Dogs",
                        value: "Security Services including Armored Cars and Guard Dogs",
                     },
                     {
                        label: "Business Services—not elsewhere classified",
                        value: "Business Services—not elsewhere classified",
                     },
                     {
                        label: "Air Conditioning Repair Shops",
                        value: "Air Conditioning Repair Shops",
                     },
                     {
                        label: "Appliance Repair Shops, Electrical and Small",
                        value: "Appliance Repair Shops, Electrical and Small",
                     },
                     {
                        label: "Agricultural Cooperatives",
                        value: "Agricultural Cooperatives",
                     },
                     {
                        label: "Clock Repair Shops",
                        value: "Clock Repair Shops",
                     },
                     {
                        label: "Furniture—Reupholstery and Repair, Refinishing",
                        value: "Furniture—Reupholstery and Repair, Refinishing",
                     },
                     {
                        label: "Religious Organizations",
                        value: "Religious Organizations",
                     },
                     {
                        label: "Architectural Services",
                        value: "Architectural Services",
                     },
                     {
                        label: "Accounting Services",
                        value: "Accounting Services",
                     },
                     {
                        label: "Auctions",
                        value: "Auctions",
                     },
                     {
                        label: "TESTINGLABORATORY-NONMED",
                        value: "TESTINGLABORATORY-NONMED",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Restaurants",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 Caterers: "5811",
                                 "Eating Places, Restaurants": "5812",
                                 "Bars—Drinking Places": "5813",
                                 "Fast Food Restaurants": "5814",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "Caterers",
                        value: "Caterers",
                     },
                     {
                        label: "Eating Places, Restaurants",
                        value: "Eating Places, Restaurants",
                     },
                     {
                        label: "Bars—Drinking Places",
                        value: "Bars—Drinking Places",
                     },
                     {
                        label: "Fast Food Restaurants",
                        value: "Fast Food Restaurants",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "business_sub_category",
                  label: { text: "Business Sub-Category", className: "" },
                  placeHolder: { text: "Search Business Sub-Category", className: "" },
                  helperText: { text: "", className: "" },
                  type: "SELECT",
                  sortOrder: 1,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_category",
                           operator: "EQUALS",
                           value: "Others",
                        },
                     ],
                  },
                  impactedFields: [
                     {
                        field: "mcc",
                        conditions: [
                           {
                              dependOn: "business_sub_category",
                              operator: "MAP",
                              options: {
                                 "General Contractors—Residential and Commercial": "1520",
                                 "Air Conditioning Contractors": "1711",
                                 "Electrical Contractors": "1731",
                                 "Masonry Contractors": "1740",
                                 "Carpentry Contractors": "1750",
                                 "Roofing and Siding Contractors": "1761",
                                 "Concrete Work Contractors": "1771",
                                 "Contractors, Special Trade—not elsewhere classified": "1799",
                                 "Plate Making, Typesetting, and Related Services 2": "2791",
                                 "Sanitation, Polishing, and Specialty Cleaning Preparations": "2842",
                                 "Ambulance Services": "4119",
                                 "Motor Freight Carriers, Trucking—Local/Long Distance, Moving and StorageCompanies, Local Delivery":
                                    "4214",
                                 "Courier Services—Air and Ground, Freight Forwarders": "4215",
                                 "Public Warehousing—Farm Products, Refrigerated Goods, Household Goods Storage":
                                    "4225",
                                 "Boat Leases and Boat Rentals": "4457",
                                 "Marinas, Marine Service/Supplies": "4468",
                                 "Bridge and Road Fees, Tolls": "4784",
                                 "Telecommunication Equipment Including Telephone Sales": "4812",
                                 "Telegraph Services -services and recurring phone services": "4821",
                                 "Motor Vehicle Supplies and New Parts2": "5013",
                                 "Furniture, Office and Commercial2": "5021",
                                 "Construction Materials—not elsewhere classified2": "5039",
                                 "Office Equipment2": "5044",
                                 "Computers, Computer Peripheral Equipment2": "5045",
                                 "Commercial Equipment—not elsewhere classified2": "5046",
                                 "Medical Equipment and Supplies2": "5047",
                                 "Metal Service Centers and Offices2": "5051",
                                 "Electrical Parts and Equipment2": "5065",
                                 "Hardware Equipment and Supplies2": "5072",
                                 "Heating Equipment2": "5074",
                                 "Industrial Supplies—not elsewhere classified2": "5085",
                                 "Precious Stones and Metals2": "5094",
                                 "Durable Goods—not elsewhere classified2": "5099",
                                 "Office Supplies, Printing and Writing Paper, Stationery2": "5111",
                                 "Drugs, Drug Proprietaries, and Druggists Sundries2": "5122",
                                 "Notions, Piece Goods, and Other Dry Goods2": "5131",
                                 "Children’s, Men’s, and Women’s Uniforms and Commercial Clothing2": "5137",
                                 "Footwear, Commercial2": "5139",
                                 "Chemicals and Allied Products—not elsewhere classified2": "5169",
                                 "Petroleum and Petroleum Products2": "5172",
                                 "Books, Newspapers, and Periodicals13": "5192",
                                 "Florists Supplies, Nursery Stock, and Flowers2": "5193",
                                 "Paints and Supplies2": "5198",
                                 "Nondurable Goods—not elsewhere classified2": "5199",
                                 "Home Supply Warehouse Stores": "5200",
                                 "Building Materials Stores": "5211",
                                 "Glass Stores": "5231",
                                 "Hardware Stores": "5251",
                                 "Garden Supply Stores": "5261",
                                 "Mobile Home Dealers": "5271",
                                 "Duty Free Stores": "5309",
                                 "Discount Stores": "5310",
                                 "Department Stores": "5311",
                                 "Miscellaneous General Merchandise Stores": "5399",
                                 "Automobile and Truck Dealers—Sales, Service, Repairs, Parts, and Leasing": "5511",
                                 "Automobile and Truck Dealers—(Used Only)—Sales": "5521",
                                 "Auto Store": "5531",
                                 "Automotive Tire Stores": "5532",
                                 "Automotive Parts, Accessories Stores": "5533",
                                 "Fuel Dispenser, Automated": "5542",
                                 "Boat Dealers": "5551",
                                 "Camper Dealers": "5561",
                                 "Motorcycle Shops and Dealers": "5571",
                                 "Motor Home Dealers": "5592",
                                 "Snowmobile Dealers": "5598",
                                 "Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers—notelsewhere classified":
                                    "5599",
                                 "Men’s and Boys’ Clothing and Accessories Stores": "5611",
                                 "Children’s and Infants’ Wear Stores": "5641",
                                 "Family Clothing Stores": "5651",
                                 "Sports Apparel Stores": "5655",
                                 "Shoe Stores": "5661",
                                 "Furriers and Fur Shops": "5681",
                                 "Men’s and Women’s Clothing Stores": "5691",
                                 "Accessory Stores—Miscellaneous": "5699",
                                 "Furniture (except Appliances)": "5712",
                                 "Floor Covering Stores": "5713",
                                 "Drapery Stores": "5714",
                                 "Fireplace, Fireplace Screens and Accessories Stores": "5718",
                                 "Miscellaneous House Furnishing Specialty Shops": "5719",
                                 "Household Appliance Stores": "5722",
                                 "Electronic Sales": "5732",
                                 "Music Stores—Musical Instruments, Pianos, Sheet Music": "5733",
                                 "Computer Software Stores": "5734",
                                 "Record Shops": "5735",
                                 "Digital Goods—Audiovisual Media Including Books, Movies, and Music": "5815",
                                 "Digital Goods—Games": "5816",
                                 "Digital Goods—Software Applications (Excluding Games)": "5817",
                                 "Digital Goods—Multi-Category": "5818",
                                 "Package Stores, Beer, Wine, Liquor": "5921",
                                 "Second Hand Stores": "5931",
                                 "Antique Shops—Sales, Repairs, and Restoration Services": "5932",
                                 "Pawn Shops": "5933",
                                 "Salvage Yards": "5935",
                                 "Antique Reproduction Stores": "5937",
                                 "Bicycle Shops—Sales and Service": "5940",
                                 "Sporting Goods Stores": "5941",
                                 "Book Stores": "5942",
                                 "Office Supply Stores": "5943",
                                 "Jewelry Stores": "5944",
                                 "Game Shops": "5945",
                                 "Camera Stores": "5946",
                                 "Card Shops": "5947",
                                 "Leather Goods Stores": "5948",
                                 "Fabric Stores": "5949",
                                 "Glassware Stores": "5950",
                                 "Direct Marketing—Insurance Services": "5960",
                                 "Direct Marketing—Catalog Merchants": "5964",
                                 "Direct Marketing—Combination Catalog and Retail Merchants": "5965",
                                 "Direct Marketing—Continuity/Subscription Merchants": "5968",
                                 "Direct Marketing—Other Direct Marketers—not elsewhere classified": "5969",
                                 "Artist Supply Stores": "5970",
                                 "Art Dealers and Galleries": "5971",
                                 "Stamp and Coin Stores—Philatelic and Numismatic Supplies": "5972",
                                 "Religious Goods Stores": "5973",
                                 "Hearing Aids—Sales, Service, Supply Stores": "5975",
                                 "Artificial Limb Stores": "5976",
                                 "Cosmetic Stores": "5977",
                                 "Fuel Dealers—Coal, Fuel Oil, Liquefied Petroleum, Wood": "5983",
                                 Florists: "5992",
                                 "Cigar Stores and Stands": "5993",
                                 "News Dealers and Newsstands": "5994",
                                 "Pet Shops—Pet Food and Supplies": "5995",
                                 "Swimming Pools—Sales and Supplies": "5996",
                                 "Electric Razor Stores—Sales and Service": "5997",
                                 "Awning Shops": "5998",
                                 "Miscellaneous and Specialty Retail Stores": "5999",
                                 "Recreational Camps": "7032",
                                 Campgrounds: "7033",
                                 "Laundry Services": "7210",
                                 "Laundry Services—Family and Commercial": "7211",
                                 "Dry Cleaners": "7216",
                                 "Carpet Cleaning": "7217",
                                 "Barber Shops": "7230",
                                 "Shoe Repair Shops, Shoe Shine Parlors": "7251",
                                 "Funeral Service": "7261",
                                 "Buying/Shopping Clubs, Services": "7278",
                                 "Formal Wear Rental": "7296",
                                 "Massage Parlors": "7297",
                                 "Beauty Spas": "7298",
                                 "Other Services—not elsewhere classified": "7299",
                                 "Consumer Credit Reporting Agencies": "7321",
                                 "Disinfecting Services": "7342",
                                 "Cleaning and Maintenance": "7349",
                                 "Information Retrieval Services2": "7375",
                                 "Computer Maintenance, Repair, and Services—not elsewhere classified2": "7379",
                                 "Equipment Rental and Leasing Services": "7394",
                                 "Photo Developing, Photofinishing Laboratories": "7395",
                                 "Motor Home Rental": "7519",
                                 "Automobile Parking Lots and Garages": "7523",
                                 "Automotive Body Repair Shop": "7531",
                                 "Automotive Paint Shops": "7535",
                                 "Automotive Service Shops": "7538",
                                 "Car Washes": "7542",
                                 "Electronic Repair Shops": "7622",
                                 "Miscellaneous Repair Shops and Related Services": "7699",
                                 "Horticultural Services": "780",
                                 "Motion Picture and Video Tape Production and Distribution2": "7829",
                                 "Motion Picture Theaters": "7832",
                                 "Pool and Billiard Establishments": "7932",
                                 Aquariums: "7998",
                                 Eyeglasses: "8043",
                                 "Legal Services": "8111",
                                 "Charitable Organizations": "8398",
                                 "Civic Associations": "8641",
                                 "Automobile Associations": "8675",
                                 "Membership Organizations—not elsewhere classified": "8699",
                                 "Tourist Attractions and Exhibits": "7991",
                                 "TIRE RE-TREADING & REPAIR": "7534",
                                 "TRUCK & TRAILER RENTALS": "7513",
                                 "VETERINARY HOSPITALS": "742",
                                 "CLOTHING-WOMEN'S CLTHG": "5621",
                                 "VIDEO RENTAL STORES": "7841",
                                 "CLOTHING - LINGERIE": "5631",
                                 "TOWING SERVICES": "7549",
                                 "TRANSPORTATION SERVICES": "4789",
                                 "VARIETY STORE": "5331",
                                 "WELDING SERVICES": "7692",
                                 "WAREHOUSE CLUBS": "5300",
                                 "WIG AND TOUPEE STORES": "5698",
                                 "RAILROADS - FREIGHT": "4011",
                                 "Typewriter Stores—Rentals, Sales, Service": "5978",
                              },
                           },
                        ],
                     },
                  ],
                  options: [
                     {
                        label: "General Contractors—Residential and Commercial",
                        value: "General Contractors—Residential and Commercial",
                     },
                     {
                        label: "Air Conditioning Contractors",
                        value: "Air Conditioning Contractors",
                     },
                     {
                        label: "Electrical Contractors",
                        value: "Electrical Contractors",
                     },
                     {
                        label: "Masonry Contractors",
                        value: "Masonry Contractors",
                     },
                     {
                        label: "Carpentry Contractors",
                        value: "Carpentry Contractors",
                     },
                     {
                        label: "Roofing and Siding Contractors",
                        value: "Roofing and Siding Contractors",
                     },
                     {
                        label: "Concrete Work Contractors",
                        value: "Concrete Work Contractors",
                     },
                     {
                        label: "Contractors, Special Trade—not elsewhere classified",
                        value: "Contractors, Special Trade—not elsewhere classified",
                     },
                     {
                        label: "Plate Making, Typesetting, and Related Services 2",
                        value: "Plate Making, Typesetting, and Related Services 2",
                     },
                     {
                        label: "Sanitation, Polishing, and Specialty Cleaning Preparations",
                        value: "Sanitation, Polishing, and Specialty Cleaning Preparations",
                     },
                     {
                        label: "Ambulance Services",
                        value: "Ambulance Services",
                     },
                     {
                        label: "Motor Freight Carriers, Trucking—Local/Long Distance, Moving and StorageCompanies, Local Delivery",
                        value: "Motor Freight Carriers, Trucking—Local/Long Distance, Moving and StorageCompanies, Local Delivery",
                     },
                     {
                        label: "Courier Services—Air and Ground, Freight Forwarders",
                        value: "Courier Services—Air and Ground, Freight Forwarders",
                     },
                     {
                        label: "Public Warehousing—Farm Products, Refrigerated Goods, Household Goods Storage",
                        value: "Public Warehousing—Farm Products, Refrigerated Goods, Household Goods Storage",
                     },
                     {
                        label: "Boat Leases and Boat Rentals",
                        value: "Boat Leases and Boat Rentals",
                     },
                     {
                        label: "Marinas, Marine Service/Supplies",
                        value: "Marinas, Marine Service/Supplies",
                     },
                     {
                        label: "Bridge and Road Fees, Tolls",
                        value: "Bridge and Road Fees, Tolls",
                     },
                     {
                        label: "Telecommunication Equipment Including Telephone Sales",
                        value: "Telecommunication Equipment Including Telephone Sales",
                     },
                     {
                        label: "Telegraph Services -services and recurring phone services",
                        value: "Telegraph Services -services and recurring phone services",
                     },
                     {
                        label: "Motor Vehicle Supplies and New Parts2",
                        value: "Motor Vehicle Supplies and New Parts2",
                     },
                     {
                        label: "Furniture, Office and Commercial2",
                        value: "Furniture, Office and Commercial2",
                     },
                     {
                        label: "Construction Materials—not elsewhere classified2",
                        value: "Construction Materials—not elsewhere classified2",
                     },
                     {
                        label: "Office Equipment2",
                        value: "Office Equipment2",
                     },
                     {
                        label: "Computers, Computer Peripheral Equipment2",
                        value: "Computers, Computer Peripheral Equipment2",
                     },
                     {
                        label: "Commercial Equipment—not elsewhere classified2",
                        value: "Commercial Equipment—not elsewhere classified2",
                     },
                     {
                        label: "Medical Equipment and Supplies2",
                        value: "Medical Equipment and Supplies2",
                     },
                     {
                        label: "Metal Service Centers and Offices2",
                        value: "Metal Service Centers and Offices2",
                     },
                     {
                        label: "Electrical Parts and Equipment2",
                        value: "Electrical Parts and Equipment2",
                     },
                     {
                        label: "Hardware Equipment and Supplies2",
                        value: "Hardware Equipment and Supplies2",
                     },
                     {
                        label: "Heating Equipment2",
                        value: "Heating Equipment2",
                     },
                     {
                        label: "Industrial Supplies—not elsewhere classified2",
                        value: "Industrial Supplies—not elsewhere classified2",
                     },
                     {
                        label: "Precious Stones and Metals2",
                        value: "Precious Stones and Metals2",
                     },
                     {
                        label: "Durable Goods—not elsewhere classified2",
                        value: "Durable Goods—not elsewhere classified2",
                     },
                     {
                        label: "Office Supplies, Printing and Writing Paper, Stationery2",
                        value: "Office Supplies, Printing and Writing Paper, Stationery2",
                     },
                     {
                        label: "Drugs, Drug Proprietaries, and Druggists Sundries2",
                        value: "Drugs, Drug Proprietaries, and Druggists Sundries2",
                     },
                     {
                        label: "Notions, Piece Goods, and Other Dry Goods2",
                        value: "Notions, Piece Goods, and Other Dry Goods2",
                     },
                     {
                        label: "Children’s, Men’s, and Women’s Uniforms and Commercial Clothing2",
                        value: "Children’s, Men’s, and Women’s Uniforms and Commercial Clothing2",
                     },
                     {
                        label: "Footwear, Commercial2",
                        value: "Footwear, Commercial2",
                     },
                     {
                        label: "Chemicals and Allied Products—not elsewhere classified2",
                        value: "Chemicals and Allied Products—not elsewhere classified2",
                     },
                     {
                        label: "Petroleum and Petroleum Products2",
                        value: "Petroleum and Petroleum Products2",
                     },
                     {
                        label: "Books, Newspapers, and Periodicals13",
                        value: "Books, Newspapers, and Periodicals13",
                     },
                     {
                        label: "Florists Supplies, Nursery Stock, and Flowers2",
                        value: "Florists Supplies, Nursery Stock, and Flowers2",
                     },
                     {
                        label: "Paints and Supplies2",
                        value: "Paints and Supplies2",
                     },
                     {
                        label: "Nondurable Goods—not elsewhere classified2",
                        value: "Nondurable Goods—not elsewhere classified2",
                     },
                     {
                        label: "Home Supply Warehouse Stores",
                        value: "Home Supply Warehouse Stores",
                     },
                     {
                        label: "Building Materials Stores",
                        value: "Building Materials Stores",
                     },
                     {
                        label: "Glass Stores",
                        value: "Glass Stores",
                     },
                     {
                        label: "Hardware Stores",
                        value: "Hardware Stores",
                     },
                     {
                        label: "Garden Supply Stores",
                        value: "Garden Supply Stores",
                     },
                     {
                        label: "Mobile Home Dealers",
                        value: "Mobile Home Dealers",
                     },
                     {
                        label: "Duty Free Stores",
                        value: "Duty Free Stores",
                     },
                     {
                        label: "Discount Stores",
                        value: "Discount Stores",
                     },
                     {
                        label: "Department Stores",
                        value: "Department Stores",
                     },
                     {
                        label: "Miscellaneous General Merchandise Stores",
                        value: "Miscellaneous General Merchandise Stores",
                     },
                     {
                        label: "Automobile and Truck Dealers—Sales, Service, Repairs, Parts, and Leasing",
                        value: "Automobile and Truck Dealers—Sales, Service, Repairs, Parts, and Leasing",
                     },
                     {
                        label: "Automobile and Truck Dealers—(Used Only)—Sales",
                        value: "Automobile and Truck Dealers—(Used Only)—Sales",
                     },
                     {
                        label: "Auto Store",
                        value: "Auto Store",
                     },
                     {
                        label: "Automotive Tire Stores",
                        value: "Automotive Tire Stores",
                     },
                     {
                        label: "Automotive Parts, Accessories Stores",
                        value: "Automotive Parts, Accessories Stores",
                     },
                     {
                        label: "Fuel Dispenser, Automated",
                        value: "Fuel Dispenser, Automated",
                     },
                     {
                        label: "Boat Dealers",
                        value: "Boat Dealers",
                     },
                     {
                        label: "Camper Dealers",
                        value: "Camper Dealers",
                     },
                     {
                        label: "Motorcycle Shops and Dealers",
                        value: "Motorcycle Shops and Dealers",
                     },
                     {
                        label: "Motor Home Dealers",
                        value: "Motor Home Dealers",
                     },
                     {
                        label: "Snowmobile Dealers",
                        value: "Snowmobile Dealers",
                     },
                     {
                        label: "Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers—notelsewhere classified",
                        value: "Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers—notelsewhere classified",
                     },
                     {
                        label: "Men’s and Boys’ Clothing and Accessories Stores",
                        value: "Men’s and Boys’ Clothing and Accessories Stores",
                     },
                     {
                        label: "Children’s and Infants’ Wear Stores",
                        value: "Children’s and Infants’ Wear Stores",
                     },
                     {
                        label: "Family Clothing Stores",
                        value: "Family Clothing Stores",
                     },
                     {
                        label: "Sports Apparel Stores",
                        value: "Sports Apparel Stores",
                     },
                     {
                        label: "Shoe Stores",
                        value: "Shoe Stores",
                     },
                     {
                        label: "Furriers and Fur Shops",
                        value: "Furriers and Fur Shops",
                     },
                     {
                        label: "Men’s and Women’s Clothing Stores",
                        value: "Men’s and Women’s Clothing Stores",
                     },
                     {
                        label: "Accessory Stores—Miscellaneous",
                        value: "Accessory Stores—Miscellaneous",
                     },
                     {
                        label: "Furniture (except Appliances)",
                        value: "Furniture (except Appliances)",
                     },
                     {
                        label: "Floor Covering Stores",
                        value: "Floor Covering Stores",
                     },
                     {
                        label: "Drapery Stores",
                        value: "Drapery Stores",
                     },
                     {
                        label: "Fireplace, Fireplace Screens and Accessories Stores",
                        value: "Fireplace, Fireplace Screens and Accessories Stores",
                     },
                     {
                        label: "Miscellaneous House Furnishing Specialty Shops",
                        value: "Miscellaneous House Furnishing Specialty Shops",
                     },
                     {
                        label: "Household Appliance Stores",
                        value: "Household Appliance Stores",
                     },
                     {
                        label: "Electronic Sales",
                        value: "Electronic Sales",
                     },
                     {
                        label: "Music Stores—Musical Instruments, Pianos, Sheet Music",
                        value: "Music Stores—Musical Instruments, Pianos, Sheet Music",
                     },
                     {
                        label: "Computer Software Stores",
                        value: "Computer Software Stores",
                     },
                     {
                        label: "Record Shops",
                        value: "Record Shops",
                     },
                     {
                        label: "Digital Goods—Audiovisual Media Including Books, Movies, and Music",
                        value: "Digital Goods—Audiovisual Media Including Books, Movies, and Music",
                     },
                     {
                        label: "Digital Goods—Games",
                        value: "Digital Goods—Games",
                     },
                     {
                        label: "Digital Goods—Software Applications (Excluding Games)",
                        value: "Digital Goods—Software Applications (Excluding Games)",
                     },
                     {
                        label: "Digital Goods—Multi-Category",
                        value: "Digital Goods—Multi-Category",
                     },
                     {
                        label: "Package Stores, Beer, Wine, Liquor",
                        value: "Package Stores, Beer, Wine, Liquor",
                     },
                     {
                        label: "Second Hand Stores",
                        value: "Second Hand Stores",
                     },
                     {
                        label: "Antique Shops—Sales, Repairs, and Restoration Services",
                        value: "Antique Shops—Sales, Repairs, and Restoration Services",
                     },
                     {
                        label: "Pawn Shops",
                        value: "Pawn Shops",
                     },
                     {
                        label: "Salvage Yards",
                        value: "Salvage Yards",
                     },
                     {
                        label: "Antique Reproduction Stores",
                        value: "Antique Reproduction Stores",
                     },
                     {
                        label: "Bicycle Shops—Sales and Service",
                        value: "Bicycle Shops—Sales and Service",
                     },
                     {
                        label: "Sporting Goods Stores",
                        value: "Sporting Goods Stores",
                     },
                     {
                        label: "Book Stores",
                        value: "Book Stores",
                     },
                     {
                        label: "Office Supply Stores",
                        value: "Office Supply Stores",
                     },
                     {
                        label: "Jewelry Stores",
                        value: "Jewelry Stores",
                     },
                     {
                        label: "Game Shops",
                        value: "Game Shops",
                     },
                     {
                        label: "Camera Stores",
                        value: "Camera Stores",
                     },
                     {
                        label: "Card Shops",
                        value: "Card Shops",
                     },
                     {
                        label: "Leather Goods Stores",
                        value: "Leather Goods Stores",
                     },
                     {
                        label: "Fabric Stores",
                        value: "Fabric Stores",
                     },
                     {
                        label: "Glassware Stores",
                        value: "Glassware Stores",
                     },
                     {
                        label: "Direct Marketing—Insurance Services",
                        value: "Direct Marketing—Insurance Services",
                     },
                     {
                        label: "Direct Marketing—Catalog Merchants",
                        value: "Direct Marketing—Catalog Merchants",
                     },
                     {
                        label: "Direct Marketing—Combination Catalog and Retail Merchants",
                        value: "Direct Marketing—Combination Catalog and Retail Merchants",
                     },
                     {
                        label: "Direct Marketing—Continuity/Subscription Merchants",
                        value: "Direct Marketing—Continuity/Subscription Merchants",
                     },
                     {
                        label: "Direct Marketing—Other Direct Marketers—not elsewhere classified",
                        value: "Direct Marketing—Other Direct Marketers—not elsewhere classified",
                     },
                     {
                        label: "Artist Supply Stores",
                        value: "Artist Supply Stores",
                     },
                     {
                        label: "Art Dealers and Galleries",
                        value: "Art Dealers and Galleries",
                     },
                     {
                        label: "Stamp and Coin Stores—Philatelic and Numismatic Supplies",
                        value: "Stamp and Coin Stores—Philatelic and Numismatic Supplies",
                     },
                     {
                        label: "Religious Goods Stores",
                        value: "Religious Goods Stores",
                     },
                     {
                        label: "Hearing Aids—Sales, Service, Supply Stores",
                        value: "Hearing Aids—Sales, Service, Supply Stores",
                     },
                     {
                        label: "Artificial Limb Stores",
                        value: "Artificial Limb Stores",
                     },
                     {
                        label: "Cosmetic Stores",
                        value: "Cosmetic Stores",
                     },
                     {
                        label: "Fuel Dealers—Coal, Fuel Oil, Liquefied Petroleum, Wood\nFlorists",
                        value: "Fuel Dealers—Coal, Fuel Oil, Liquefied Petroleum, Wood\nFlorists",
                     },
                     {
                        label: "Cigar Stores and Stands",
                        value: "Cigar Stores and Stands",
                     },
                     {
                        label: "News Dealers and Newsstands",
                        value: "News Dealers and Newsstands",
                     },
                     {
                        label: "Pet Shops—Pet Food and Supplies",
                        value: "Pet Shops—Pet Food and Supplies",
                     },
                     {
                        label: "Swimming Pools—Sales and Supplies",
                        value: "Swimming Pools—Sales and Supplies",
                     },
                     {
                        label: "Electric Razor Stores—Sales and Service",
                        value: "Electric Razor Stores—Sales and Service",
                     },
                     {
                        label: "Awning Shops",
                        value: "Awning Shops",
                     },
                     {
                        label: "Miscellaneous and Specialty Retail Stores",
                        value: "Miscellaneous and Specialty Retail Stores",
                     },
                     {
                        label: "Recreational Camps",
                        value: "Recreational Camps",
                     },
                     {
                        label: "Campgrounds",
                        value: "Campgrounds",
                     },
                     {
                        label: "Laundry Services",
                        value: "Laundry Services",
                     },
                     {
                        label: "Laundry Services—Family and Commercial",
                        value: "Laundry Services—Family and Commercial",
                     },
                     {
                        label: "Dry Cleaners",
                        value: "Dry Cleaners",
                     },
                     {
                        label: "Carpet Cleaning",
                        value: "Carpet Cleaning",
                     },
                     {
                        label: "Barber Shops",
                        value: "Barber Shops",
                     },
                     {
                        label: "Shoe Repair Shops, Shoe Shine Parlors",
                        value: "Shoe Repair Shops, Shoe Shine Parlors",
                     },
                     {
                        label: "Funeral Service",
                        value: "Funeral Service",
                     },
                     {
                        label: "Buying/Shopping Clubs, Services",
                        value: "Buying/Shopping Clubs, Services",
                     },
                     {
                        label: "Formal Wear Rental",
                        value: "Formal Wear Rental",
                     },
                     {
                        label: "Massage Parlors",
                        value: "Massage Parlors",
                     },
                     {
                        label: "Beauty Spas",
                        value: "Beauty Spas",
                     },
                     {
                        label: "Other Services—not elsewhere classified",
                        value: "Other Services—not elsewhere classified",
                     },
                     {
                        label: "Consumer Credit Reporting Agencies",
                        value: "Consumer Credit Reporting Agencies",
                     },
                     {
                        label: "Disinfecting Services",
                        value: "Disinfecting Services",
                     },
                     {
                        label: "Cleaning and Maintenance",
                        value: "Cleaning and Maintenance",
                     },
                     {
                        label: "Information Retrieval Services2",
                        value: "Information Retrieval Services2",
                     },
                     {
                        label: "Computer Maintenance, Repair, and Services—not elsewhere classified2",
                        value: "Computer Maintenance, Repair, and Services—not elsewhere classified2",
                     },
                     {
                        label: "Equipment Rental and Leasing Services",
                        value: "Equipment Rental and Leasing Services",
                     },
                     {
                        label: "Photo Developing, Photofinishing Laboratories",
                        value: "Photo Developing, Photofinishing Laboratories",
                     },
                     {
                        label: "Motor Home Rental",
                        value: "Motor Home Rental",
                     },
                     {
                        label: "Automobile Parking Lots and Garages",
                        value: "Automobile Parking Lots and Garages",
                     },
                     {
                        label: "Automotive Body Repair Shop",
                        value: "Automotive Body Repair Shop",
                     },
                     {
                        label: "Automotive Paint Shops",
                        value: "Automotive Paint Shops",
                     },
                     {
                        label: "Automotive Service Shops",
                        value: "Automotive Service Shops",
                     },
                     {
                        label: "Car Washes",
                        value: "Car Washes",
                     },
                     {
                        label: "Electronic Repair Shops",
                        value: "Electronic Repair Shops",
                     },
                     {
                        label: "Miscellaneous Repair Shops and Related Services",
                        value: "Miscellaneous Repair Shops and Related Services",
                     },
                     {
                        label: "Horticultural Services",
                        value: "Horticultural Services",
                     },
                     {
                        label: "Motion Picture and Video Tape Production and Distribution2",
                        value: "Motion Picture and Video Tape Production and Distribution2",
                     },
                     {
                        label: "Motion Picture Theaters",
                        value: "Motion Picture Theaters",
                     },
                     {
                        label: "Pool and Billiard Establishments",
                        value: "Pool and Billiard Establishments",
                     },
                     {
                        label: "Aquariums",
                        value: "Aquariums",
                     },
                     {
                        label: "Eyeglasses",
                        value: "Eyeglasses",
                     },
                     {
                        label: "Legal Services",
                        value: "Legal Services",
                     },
                     {
                        label: "Charitable Organizations",
                        value: "Charitable Organizations",
                     },
                     {
                        label: "Civic Associations",
                        value: "Civic Associations",
                     },
                     {
                        label: "Automobile Associations",
                        value: "Automobile Associations",
                     },
                     {
                        label: "Membership Organizations—not elsewhere classified",
                        value: "Membership Organizations—not elsewhere classified",
                     },
                     {
                        label: "Tourist Attractions and Exhibits",
                        value: "Tourist Attractions and Exhibits",
                     },
                     {
                        label: "TIRE RE-TREADING & REPAIR",
                        value: "TIRE RE-TREADING & REPAIR",
                     },
                     {
                        label: "TRUCK & TRAILER RENTALS",
                        value: "TRUCK & TRAILER RENTALS",
                     },
                     {
                        label: "VETERINARY HOSPITALS",
                        value: "VETERINARY HOSPITALS",
                     },
                     {
                        label: "CLOTHING-WOMEN'S CLTHG",
                        value: "CLOTHING-WOMEN'S CLTHG",
                     },
                     {
                        label: "VIDEO RENTAL STORES",
                        value: "VIDEO RENTAL STORES",
                     },
                     {
                        label: "CLOTHING - LINGERIE",
                        value: "CLOTHING - LINGERIE",
                     },
                     {
                        label: "TOWING SERVICES",
                        value: "TOWING SERVICES",
                     },
                     {
                        label: "TRANSPORTATION SERVICES",
                        value: "TRANSPORTATION SERVICES",
                     },
                     {
                        label: "VARIETY STORE",
                        value: "VARIETY STORE",
                     },
                     {
                        label: "WELDING SERVICES",
                        value: "WELDING SERVICES",
                     },
                     {
                        label: "WAREHOUSE CLUBS",
                        value: "WAREHOUSE CLUBS",
                     },
                     {
                        label: "WIG AND TOUPEE STORES",
                        value: "WIG AND TOUPEE STORES",
                     },
                     {
                        label: "RAILROADS - FREIGHT",
                        value: "RAILROADS - FREIGHT",
                     },
                     {
                        label: "Typewriter Stores—Rentals, Sales, Service",
                        value: "Typewriter Stores—Rentals, Sales, Service",
                     },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "mcc",
                  label: { text: "MCC", className: "" },
                  placeHolder: { text: "MCC", className: "" },
                  type: "INPUT",
                  autoFillSource: "",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "NUMERIC",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pr-2 md:pr-2",
               },
               {
                  name: "monthly_online_business_volume",
                  label: { text: "Monthly Online Business Volume", className: "" },
                  placeHolder: { text: "Monthly Online Business Volume", className: "" },
                  type: "SELECT",
                  autoFillSource: "",
                  isEditable: true,
                  options: [
                     { label: "INR 0-10,000", value: "INR 0-10,000" },
                     { label: "INR 10,000-50,000", value: "INR 10,000-50,000" },
                     { label: "INR 50,000 - 2,00,000", value: "INR 50,000 - 2,00,000" },
                     { label: "INR 2,00,000 - 5,00,000", value: "INR 2,00,000 - 5,00,000" },
                     { label: "INR 5,00,000 - 10,00,000", value: "INR 5,00,000 - 10,00,000" },
                     { label: "INR 10,00,000 - 50,00,000", value: "INR 10,00,000 - 50,00,000" },
                     { label: "INR 50,00,00 and more", value: "INR 50,00,00 and more" },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "merchant_url",
                  label: { text: "Website URL", className: "" },
                  placeHolder: { text: "Eg: “https://xyz.com", className: "" },
                  type: "INPUT",
                  autoFillSource: "",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "URL",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pr-2 md:pr-2",
               },
               {
                  name: "application_link",
                  label: { text: "Application link", className: "" },
                  placeHolder: { text: "Application link", className: "" },
                  type: "INPUT",
                  autoFillSource: "",
                  isEditable: true,
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
               {
                  name: "annual_turnover_in_lakhs",
                  label: { text: "Annual Turnover in Lakhs", className: "" },
                  placeHolder: { text: "Annual Turnover in Lakhs", className: "" },
                  type: "INPUT",
                  autoFillSource: "",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pr-2 md:pr-2",
               },
               {
                  name: "daily_transaction_count",
                  label: { text: "Daily Transaction Count", className: "" },
                  placeHolder: { text: "Daily Transaction Count", className: "" },
                  type: "SELECT",
                  autoFillSource: "",
                  isEditable: true,
                  options: [
                     { label: "0-50", value: "0-50" },
                     { label: "51-100", value: "51-100" },
                     { label: "101-250", value: "101-250" },
                     { label: "251-500", value: "251-500" },
                     { label: "501-1000", value: "501-1000" },
                     { label: "More than 1000", value: "More than 1000" },
                  ],
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "lg:pl-4 md:pl-4",
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "rounded" },
               style: { size: "large" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};
