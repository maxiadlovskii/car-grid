export const responseMock = {
  info: {
    rentalInformationUrl:
      "https://www.sixt.de/php/terms/view?language=de_DE&view=EPP&liso=DE&uci=11&style=typo3",
    termsAndConditionsUrl:
      "https://www.sixt.de/fileadmin/sys/agb/sixt_DE_de.pdf",
    dataPrivacyUrl: "https://www.sixt.de/fileadmin/sys/agb/DSGVO_DE_de.pdf",
    taxInformation: "Preisübersicht",
    specialApplied: false,
    corporateDiscountNumber: 0,
    corporateCustomerNumber: 0,
    pickupStationId: "11",
    returnStationId: "11",
    pickupDate: "2021-02-09T12:30:00Z",
    returnDate: "2021-02-12T08:30:00Z",
    vehicleType: "car",
  },
  offers: [
    {
      id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR",
      status: "available",
      onRequest: false,
      unlimited: false,
      description: "Audi A3 Sedan oder ähnlich",
      carGroupInfo: {
        bodyStyleKey: "Limousine",
        bodyStyle: "Limousine",
        airCondition: true,
        automatic: false,
        navigationSystem: false,
        modelGuaranteed: false,
        maxPassengers: 5,
        doors: 4,
        driverRequirements: {
          minAge: 21,
          licenseCategory: "",
          licenseMinYears: 2,
          youngDriverAge: 23,
        },
        modelExample: {
          name: "Audi A3 Sedan",
          imageUrl:
            "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
        },
        premium: true,
        luxury: false,
        baggage: {
          bags: 2,
          suitcases: 2,
        },
      },
      vehicleType: "car",
      vehicleGroupInfo: {
        bodyStyleKey: "Limousine",
        bodyStyle: "Limousine",
        airCondition: true,
        automatic: false,
        navigationSystem: false,
        modelGuaranteed: false,
        maxPassengers: 5,
        doors: 4,
        driverRequirements: {
          minAge: 21,
          licenseCategory: "",
          licenseMinYears: 2,
          youngDriverAge: 23,
        },
        modelExample: {
          name: "Audi A3 Sedan",
          imageUrl:
            "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
        },
        premium: true,
        luxury: false,
        baggage: {
          bags: 2,
          suitcases: 2,
        },
      },
      acrissCode: "SDMR",
      prices: {
        basePrice: {
          prefix: "",
          amount: {
            value: 166.33,
            display: "166,33",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 166.33,
          trackingNet: 139.77,
        },
        totalPrice: {
          prefix: "",
          amount: {
            value: 209.96,
            display: "209,96",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 209.96,
          trackingNet: 176.44,
        },
        dayPrice: {
          prefix: "",
          amount: {
            value: 69.99,
            display: "69,99",
            currency: "EUR",
          },
          unit: "Tag",
          taxInfo: "inklusive Steuern",
          tracking: 69.99,
          trackingNet: 58.81,
        },
        crossedOutTotalPrice: {
          prefix: "",
          amount: {
            value: 237.96,
            display: "237,96",
            currency: "EUR",
          },
          unit: "gesamt",
          taxInfo: "inklusive Steuern",
          tracking: 237.96,
          trackingNet: 199.97,
        },
        crossedOutDayPrice: {
          prefix: "",
          amount: {
            value: 79.32,
            display: "79,32",
            currency: "EUR",
          },
          unit: "Tag",
          taxInfo: "inklusive Steuern",
          tracking: 79.32,
          trackingNet: 66.66,
        },
        promoLabel: "Frühbucher Special",
        youngDriverFeeApplied: false,
        isHourlyBooking: false,
      },
      splashImages: [
        {
          url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-01.jpg",
          narrowMedium:
            "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
          narrowLarge:
            "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
          wideMedium:
            "https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-01.jpg",
          wideLarge:
            "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-01.jpg",
        },
        {
          url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-02.jpg",
          narrowMedium:
            "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
          narrowLarge:
            "https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
          wideMedium:
            "https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-02.jpg",
          wideLarge:
            "https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-02.jpg",
        },
      ],
      images: {
        small:
          "//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a3-limousine-4d-blau-2020.png",
        medium:
          "//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a3-limousine-4d-blau-2020.png",
        large:
          "//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a3-limousine-4d-blau-2020.png",
      },
      includedCharges: [
        {
          title: "Haftpflichtversicherung",
        },
        {
          title: "Wintertaugliche Bereifung",
        },
        {
          title: "900 Kilometer, 0,27 EUR je extra Kilometer",
        },
      ],
      payment: {
        selectedPaymentOption: "prepaid",
        paymentOptions: [
          {
            id: "prepaid",
            price: {
              prefix: "",
              amount: {
                value: 209.96,
                display: "209,96",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 209.96,
              trackingNet: 176.44,
            },
            diffPrice: {
              prefix: "",
              amount: {
                value: 0,
                display: "0,00",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "",
              tracking: 0,
              trackingNet: 0,
            },
            priceBreakdown: [
              {
                reference: "rental_period",
                title: "Mietdauer (3 Tage x 55,44)",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 166.33,
                    display: "166,33",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 166.33,
                  trackingNet: 139.77,
                },
              },
              {
                reference: "fees",
                title: "Gebühren",
                type: "group",
                items: [
                  {
                    reference: "Y",
                    title: "Standortzuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 41.85,
                        display: "41,85",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 41.85,
                      trackingNet: 35.17,
                    },
                  },
                  {
                    reference: "U",
                    title: "WLTP Zuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 1.79,
                        display: "1,79",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 1.79,
                      trackingNet: 1.5,
                    },
                  },
                ],
              },
              {
                reference: "total_price",
                title: "Gesamtpreis",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 209.96,
                    display: "209,96",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 209.96,
                  trackingNet: 176.44,
                },
              },
            ],
            crossedOutTotalPrice: {
              prefix: "",
              amount: {
                value: 237.96,
                display: "237,96",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 237.96,
              trackingNet: 199.97,
            },
            cancellationNote: "Günstigster Preis!",
          },
          {
            id: "pay_on_arrival",
            price: {
              prefix: "",
              amount: {
                value: 254.96,
                display: "254,96",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 254.96,
              trackingNet: 214.25,
            },
            diffPrice: {
              prefix: "",
              amount: {
                value: 45,
                display: "45,00",
                currency: "EUR",
              },
              unit: "gesamt",
              taxInfo: "inklusive Steuern",
              tracking: 45,
              trackingNet: 37.81,
            },
            priceBreakdown: [
              {
                reference: "rental_period",
                title: "Mietdauer (3 Tage x 67,45)",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 202.35,
                    display: "202,35",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 202.35,
                  trackingNet: 170.04,
                },
              },
              {
                reference: "fees",
                title: "Gebühren",
                type: "group",
                items: [
                  {
                    reference: "U",
                    title: "WLTP Zuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 1.79,
                        display: "1,79",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 1.79,
                      trackingNet: 1.5,
                    },
                  },
                  {
                    reference: "Y",
                    title: "Standortzuschlag",
                    type: "single",
                    price: {
                      prefix: "",
                      amount: {
                        value: 50.82,
                        display: "50,82",
                        currency: "EUR",
                      },
                      unit: "gesamt",
                      taxInfo: "inklusive Steuern",
                      tracking: 50.82,
                      trackingNet: 42.71,
                    },
                  },
                ],
              },
              {
                reference: "total_price",
                title: "Gesamtpreis",
                type: "single",
                price: {
                  prefix: "",
                  amount: {
                    value: 254.96,
                    display: "254,96",
                    currency: "EUR",
                  },
                  unit: "gesamt",
                  taxInfo: "inklusive Steuern",
                  tracking: 254.96,
                  trackingNet: 214.25,
                },
              },
            ],
            cancellationNote: "Jederzeit flexibel umbuchen!",
          },
        ],
        paymentRequired: true,
      },
      sortIndexes: {
        name: 0,
        price: 13,
        popularity: 220,
        datascience: 0,
        subscription: 0,
      },
      mileageInfo: {
        display: "inkl. 900 km",
      },
      rentalDays: 3,
      rentalHours: 0,
      headlines: {
        description: "Audi A3 Sedan",
        shortSubline: "oder ähnlich | Premium Limousine",
        longSubline: "Audi A3 Sedan oder ähnlich | Premium Limousine",
      },
    },
  ],
};

export const fetcher = (): Promise<any> => Promise.resolve(responseMock);
