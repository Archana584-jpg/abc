import React from "react";
import { Row, Col, Menu, Typography } from "antd";
import { CustomModal } from "../../../";
import { CloseOutlined } from "@ant-design/icons";
import { accountActivationFormSections, accountActivationMenuItems } from "../constants";
import { BusinessDetails, ContactDetails } from "../containers";
import { AccountActivationBlockedCard } from ".";

const { Text } = Typography;

const styles = {
   title: {
      fontSize: "0.813rem",
      lineHeight: "1.25rem",
      fontWeight: 500,
   },
   subTitle: {
      fontSize: "0.625rem",
      lineHeight: "1rem",
      display: "block",
   },
   formSection: {
      background: "#F9FBFD",
      minHeight: "32.25rem",
      maxHeight: "90vh",
      overflowY: "auto",
   },
   closeIcon: {
      fontSize: "1.5rem",
      color: "#595959",
   },
   modalBody: {
      minHeight: "32.25rem",
      padding: "0rem",
   },
};

const AccountActivationComponent = ({
   selectedMenu,
   handleChange,
   currentFormSection,
   handleFreshdeskTicketCreation,
   remainingBlockedTime,
   isUserBlocked,
}) => {
   const modalProps = isUserBlocked
      ? {
           closeable: false,
           maskClosable: true,
        }
      : {
           width: "47.938rem",
           bodyStyle: styles.modalBody,
           closeIcon: <CloseOutlined style={styles.closeIcon} />,
           maskClosable: false,
           style: { top: "1.875rem" },
        };
   return (
      <CustomModal
         visible={true}
         footer={false}
         handleClose={() => {
            handleChange("isAccountActivationModalVisible", false);
         }}
         {...modalProps}
         className={"customModalDefaultStyles"}
      >
         {isUserBlocked ? (
            <AccountActivationBlockedCard remainingBlockedTime={remainingBlockedTime} />
         ) : (
            <Row>
               <Col lg={{ span: 7 }} xs={{ span: 7 }}>
                  <Row>
                     <Col lg={{ span: 24 }} style={{ padding: "1rem" }}>
                        <Text style={styles.title}>Account activation</Text>
                        <Text style={styles.subTitle}>Complete and submit form to activate account</Text>
                     </Col>
                     <Col lg={{ span: 24 }}>
                        <Menu selectedKeys={[selectedMenu]}>
                           <Menu.Item key={accountActivationMenuItems.contactDetails.key}>
                              {accountActivationMenuItems.contactDetails.label}
                           </Menu.Item>
                           <Menu.Item key={accountActivationMenuItems.businessDetails.key}>
                              {accountActivationMenuItems.businessDetails.label}
                           </Menu.Item>
                        </Menu>
                     </Col>
                  </Row>
               </Col>

               <Col lg={{ span: 17 }} xs={{ span: 17 }} style={styles.formSection}>
                  {currentFormSection === accountActivationFormSections.BUSINESS_DETAILS ? (
                     <BusinessDetails
                        handleChange={handleChange}
                        handleFreshdeskTicketCreation={handleFreshdeskTicketCreation}
                     />
                  ) : (
                     <ContactDetails currentFormSection={currentFormSection} handleChange={handleChange} />
                  )}
               </Col>
            </Row>
         )}
      </CustomModal>
   );
};

export default AccountActivationComponent;
