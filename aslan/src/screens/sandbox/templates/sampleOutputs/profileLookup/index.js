import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import personalProfileSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/PersonalProfile.json";
import nationalIDsSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/NationalIDsByPhone.json";
import PANbyPhoneSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/PANByPhone.json";
import addressByPhoneSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/AddressByPhone.json";
import mobileLookupSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/MobileLookup.json";
import mobileNumberAgeSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/MobileNumberAge.json";
import electricityBillSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/ElectricityBill.json";
import addressLookupByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/AddressLookupByMobile.json";
import enitityLinkageSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/EntityLinkage.json";
import PANLookupByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/PANLookupByMobile.json";
import mobilePrefillSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/MobilePrefill.json";
import nameLookupByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/NameLookupByMobile.json";
import digitalFootprintLookupSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/DigitalFootprint.json";
import spendInsightsSampleOutput from "screens/sandbox/resource/sampleOutputs/profileLookup/SpendInsights.json";

const { PROFILE_LOOKUP } = productsMapping;
const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

const profileSampleOutputWithType = {
   [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: personalProfileSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: nationalIDsSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: PANbyPhoneSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: addressByPhoneSampleOutput,
   },
   [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: mobileLookupSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: mobileNumberAgeSampleOutput,
   },
   [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: electricityBillSampleOutput,
   },
   [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: addressLookupByMobileSampleOutput,
   },
   [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: enitityLinkageSampleOutput,
   },
   [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: PANLookupByMobileSampleOutput,
   },
   [profileService.offerings.PROFILE_MOBILE_PREFILL]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: mobilePrefillSampleOutput,
   },
   [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: nameLookupByMobileSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: digitalFootprintLookupSampleOutput,
   },
   [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: spendInsightsSampleOutput,
   },
};

export default profileSampleOutputWithType;
