import React, { useState, useEffect, useMemo } from "react";
import { IdentityDetails as IdentityDetailsComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";
import { transformAddressData } from "screens/xToDetails/helper";
import { isEmpty } from "lodash";

const IdentityDetails = () => {
   const [data, setData] = useState({
      profileDetails: {
         name: "-",
         gender: "-",
         dateOfBirth: "-",
         age: "-",
         fatherName: "-",
         pan: "-",
         photo: "",
      },
      mobileNumbers: [],
      logisticsAddresses: [],
      additionalAddresses: [],
      emailAddresses: [],
   });

   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   useEffect(() => {
      const mobilePrefillData = apiResponses[APINameMapping.MOBILE_PREFILL]?.data?.personal_data;
      const panDetailedData = apiResponses[APINameMapping.PAN_DETAILED]?.data?.pan_data;
      const addressLookupData = apiResponses[APINameMapping.ADDRESS_LOOKUP_BY_MOBILE]?.data?.address_data;
      const digitalFootprintData = apiResponses[APINameMapping.DIGITAL_FOOTPRINT]?.data?.digital_profile_data;

      // Function to extract WhatsApp image URL
      const getWhatsAppImage = () => {
         if (!digitalFootprintData || !Array.isArray(digitalFootprintData)) {
            return "";
         }

         for (const profileData of digitalFootprintData) {
            if (profileData.data_type === "phone_data" || profileData.data_type === "email_data") {
               const accountDetails = profileData.primary_data?.account_details;

               if (accountDetails && Array.isArray(accountDetails)) {
                  const whatsappAccount = accountDetails.find((account) => account.platform === "WHATSAPP");

                  if (whatsappAccount && whatsappAccount.user_exist === true && whatsappAccount.image) {
                     return whatsappAccount.image;
                  }
               }
            }
         }

         return "";
      };

      setData({
         ...data,
         profileDetails: {
            name: panDetailedData?.name || mobilePrefillData?.personal_information?.full_name || "-",
            gender: panDetailedData?.gender || mobilePrefillData?.personal_information?.gender || "-",
            dateOfBirth:
               panDetailedData?.date_of_birth || mobilePrefillData?.personal_information?.date_of_birth || "-",
            age: calculateAge(panDetailedData?.date_of_birth || mobilePrefillData?.personal_information?.date_of_birth),
            fatherName: apiResponses[APINameMapping.FATHER_NAME_BY_PAN]?.data?.pan_data?.father_name || "-",
            pan: mobilePrefillData?.document_data?.pan?.[0]?.value || panDetailedData?.document_id || "-",
            photo: getWhatsAppImage(),
         },
         mobileNumbers: [...new Set([...(mobilePrefillData?.alternate_phone?.map((phone) => phone.value) || [])])],
         logisticsAddresses: transformAddressData(addressLookupData) || [],
         additionalAddresses: [...(mobilePrefillData?.address?.map((item) => item) || [])],
         emailAddresses: [
            ...new Set([
               ...(mobilePrefillData?.email?.map((email) => email.value) || []),
               ...(addressLookupData?.map((item) => item.email)?.filter((email) => email) || []),
            ]),
         ],
      });
   }, [
      apiResponses[APINameMapping.MOBILE_PREFILL],
      apiResponses[APINameMapping.PAN_DETAILED],
      apiResponses[APINameMapping.FATHER_NAME_BY_PAN],
      apiResponses[APINameMapping.DIGITAL_FOOTPRINT],
      apiResponses[APINameMapping.ADDRESS_LOOKUP_BY_MOBILE],
   ]);

   const calculateAge = (dateOfBirth) => {
      if (!dateOfBirth || dateOfBirth === "-") return "-";

      try {
         const birthDate = new Date(dateOfBirth);
         const today = new Date();

         if (isNaN(birthDate.getTime())) return "-";

         let age = today.getFullYear() - birthDate.getFullYear();
         const monthDiff = today.getMonth() - birthDate.getMonth();

         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
         }

         return age >= 0 ? `${age.toString()} years` : "-";
      } catch (error) {
         return "-";
      }
   };

   const isProfileDataAvailable = useMemo(() => {
      const profileDetails = data.profileDetails;

      const hasName = profileDetails.name && profileDetails.name !== "-";
      const hasGender = profileDetails.gender && profileDetails.gender !== "-";
      const hasDateOfBirth = profileDetails.dateOfBirth && profileDetails.dateOfBirth !== "-";
      const hasAge = profileDetails.age && profileDetails.age !== "-";
      const hasFatherName = profileDetails.fatherName && profileDetails.fatherName !== "-";
      const hasPan = profileDetails.pan && profileDetails.pan !== "-";
      const hasPhoto = profileDetails.photo;

      return hasName || hasGender || hasDateOfBirth || hasAge || hasFatherName || hasPan || hasPhoto;
   }, [data.profileDetails]);

   return (
      <IdentityDetailsComponent
         data={data}
         isDataAvailable={
            !isEmpty(apiResponses[APINameMapping.MOBILE_PREFILL]?.data?.personal_data) ||
            !isEmpty(apiResponses[APINameMapping.PAN_DETAILED]?.data?.pan_data) ||
            !isEmpty(apiResponses[APINameMapping.FATHER_NAME_BY_PAN]?.data?.pan_data) ||
            !isEmpty(apiResponses[APINameMapping.DIGITAL_FOOTPRINT]?.data?.digital_profile_data) ||
            !isEmpty(apiResponses[APINameMapping.ADDRESS_LOOKUP_BY_MOBILE]?.data?.address_data)
         }
         isProfileDataAvailable={isProfileDataAvailable}
      />
   );
};

export default IdentityDetails;
