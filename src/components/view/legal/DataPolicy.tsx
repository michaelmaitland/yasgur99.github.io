import React from "react";
import { StyleSheet } from "../../../constants/Styles";
import { Text } from "../../general";
import LegalHeader from "./LegalHeader";
import { headerProps, paragraphProps } from "./LegalStyles";

export interface TOSViewProps {
  containerStyles?: React.CSSProperties;
}

const TOSView: React.FC<TOSViewProps> = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.document}>
        <LegalHeader title="Data Policy" />
        <Text {...paragraphProps}>Effective Date: November 14, 2019</Text>
        <Text {...paragraphProps} />
        <Text {...paragraphProps}>
          Thank you for using Hover! We are excited to share in your passion for
          gaming.{" "}
        </Text>
        <Text {...paragraphProps}>
          To provide our service, we collect certain information about you. This
          Data Policy describes (i) how and why we collect your personal data,
          (ii) how we use your personal data and (iii) the choices you have
          about your personal data.{" "}
        </Text>
        <Text {...paragraphProps} />
        <Text {...paragraphProps}>
          This Data Policy applies to the Hover Service as well as Skwads,
          LLC-provided applications, websites and related services, which we
          collectively refer to as the Service. This Data Policy is incorporated
          into our Terms of Use and may be updated from time to time by posting
          a new version on our Service. If we make any material changes, we will
          notify you by posting an advance notice in the Service. Your continued
          use of the Service after the effective date will be subject to the new
          Data Policy.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>CONTACT US</Text>
        <Text {...paragraphProps}>
          If you have questions about data protection, or if you have any
          requests for resolving issues with your personal data, we encourage
          you to contact us through the Service so we can reply to you more
          quickly.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Name of the controller: Skwads, LLC</Text>
        <Text {...paragraphProps}>
          Address: 55 Water Street, Floor 32, New York NY 10041
        </Text>
        <Text {...paragraphProps}>email: legal@skwads.com</Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>THE DATA WE COLLECT</Text>
        <Text {...paragraphProps}>
          Data you provide us, including all content posted, uploaded, shared or
          otherwise transmitted through the Service.{" "}
        </Text>
        <Text {...paragraphProps}>Content accessed through the Service.</Text>
        <Text {...paragraphProps}>
          Contact information (such as name and email address)
        </Text>
        <Text {...paragraphProps}>User name and password</Text>
        <Text {...paragraphProps}>
          Profile information (such as profile photo)
        </Text>
        <Text {...paragraphProps}>
          Your messages to the Service (such as chat logs and support tickets)
        </Text>
        <Text {...paragraphProps}>
          Other data you choose to give us (such as data to identify a lost
          account)
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Data we collect automatically.</Text>
        <Text {...paragraphProps}>
          Your IP address and mobile device identifiers (such as your device ID,
          advertising ID, MAC address, IMEI).
        </Text>
        <Text {...paragraphProps}>
          Data about your device, such as device name and operating system,
          browser type and language.
        </Text>
        <Text {...paragraphProps}>
          Data we collect with cookies and similar technologies (see more
          below).
        </Text>
        <Text {...paragraphProps}>General location data.</Text>
        <Text {...paragraphProps}>
          Precise geo-location data (GPS, with your consent).
        </Text>
        <Text {...paragraphProps}>
          Data about your use of the Service, such as your interactions with the
          platform and other users inside the Service, and applications and
          programs used to interface with the Service.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Data we collect from our partners.</Text>
        <Text {...paragraphProps}>
          Data we receive if you link a third-party tool or game with the
          Service (such as Facebook or Google).
        </Text>
        <Text {...paragraphProps}>
          Demographic data (such as to determine the coarse location of your IP
          address).
        </Text>
        <Text {...paragraphProps}>
          Data to fight fraud (such as click fraud in advertising).
        </Text>
        <Text {...paragraphProps}>
          Data for advertising and analytics purposes, so we can provide you a
          better Service.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>WHY WE COLLECT YOUR DATA</Text>
        <Text {...paragraphProps}>To make the Service work.</Text>
        <Text {...paragraphProps}>
          To perform the contract, we process data necessary to create accounts
          and allow you to use our Service
        </Text>
        <Text {...paragraphProps}>Operate the Service</Text>
        <Text {...paragraphProps}>Send you Service-related communications</Text>
        <Text {...paragraphProps}>
          To provide a great Service to our users, we collect and process
          necessary data to:
        </Text>
        <Text {...paragraphProps}>
          Develop and improve the Service and user experience
        </Text>
        <Text {...paragraphProps}>Manage our relationship with you</Text>
        <Text {...paragraphProps}>
          Provide social features as part of the Service
        </Text>
        <Text {...paragraphProps}>Customize your Service experience</Text>
        <Text {...paragraphProps}>
          Respond to your comments and questions and provide user support
        </Text>
        <Text {...paragraphProps}>
          Provide you Skwads offers in the Service as well as in other websites
          and services, and by email
        </Text>
        <Text {...paragraphProps}>
          Send you related information, such as updates, security alerts, and
          support messages
        </Text>
        <Text {...paragraphProps}>
          Enable you to communicate with other users
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>To show personalized advertisements.</Text>
        <Text {...paragraphProps}>
          To show you personalized advertisements in the Service as well as in
          other websites and services (including email) we process necessary
          data to:
        </Text>
        <Text {...paragraphProps}>
          Track the content you access in connection with the Service and your
          online behavior
        </Text>
        <Text {...paragraphProps}>
          Deliver, target and improve our advertising and the Service
        </Text>
        <Text {...paragraphProps}>
          For information on how to opt-out from personalized advertisements,
          see section &apos;Your rights and options&apos; below.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>To keep the Service safe and fair.</Text>
        <Text {...paragraphProps}>
          Ensuring a level playing field in the Service is a top priority for
          us. For more information on our acceptable use policy, see the Terms
          of Use.
        </Text>
        <Text {...paragraphProps}>
          In order to keep the Service and its social features safe and fair, to
          fight fraud and ensure acceptable use otherwise, we process necessary
          data to:
        </Text>
        <Text {...paragraphProps}>
          Analyze and monitor use of the Service and its social features
        </Text>
        <Text {...paragraphProps}>
          Moderate chats either automatically or manually
        </Text>
        <Text {...paragraphProps}>
          Take action against fraudulent or misbehaving users, including
          enforcing any of the Terms of Use
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>To analyze, profile, and segment.</Text>
        <Text {...paragraphProps}>
          In all of the above cases and purposes, we may analyze, profile and
          segment all collected data.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Other uses with your consent.</Text>
        <Text {...paragraphProps}>
          With your consent, we may process your data for additional purposes,
          such as using your GPS location to show you local events.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>WHO CAN SEE YOUR DATA</Text>
        <Text {...paragraphProps}>
          Apart from Skwads, your data can be accessed by others in the
          following situations:
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Other Users. </Text>
        <Text {...paragraphProps}>
          Social interaction is the heart of our Service. Other users will be
          able to see your profile data, view images and videos you share and
          read the messages you have posted.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Partners working for Skwads. </Text>
        <Text {...paragraphProps}>
          Skwads may use partners to perform services for us. These partners
          will process your data only at and according to Skwads´s instructions
          to provide the Service, such as hosting, virus protection, support,
          advertising, analytics and fraud prevention.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Other companies and public authorities.</Text>
        <Text {...paragraphProps}>
          In order to combat fraud and illegal activity, we may exchange data
          with other companies and organizations and provide it to public
          authorities in response to lawful requests. We may also disclose your
          data based on your consent, to comply with the law or to protect the
          rights, property or safety of us, our users or others.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Advertising and Social Media partners.</Text>
        <Text {...paragraphProps}>
          The Service includes features from our partners, such as social media
          interaction tools and advertising. A list of these partners is
          available at Skwads.com/partner-opt-out. These partners may access
          your data and operate under their own privacy policies. We encourage
          you to check their privacy policies to learn more about their data
          processing practices.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>INTERNATIONAL DATA TRANSFERS</Text>
        <Text {...paragraphProps}>
          Our Service is global by nature and your data can therefore be
          transferred to anywhere in the world. Because different countries may
          have different data protection laws than your own country, we take
          steps to ensure adequate safeguards are in place to protect your data
          as explained in this Policy. Adequate safeguards that our partners may
          use include standard contractual clauses approved by EU Commission and
          the Privacy Shield certification in case of transfers to the USA.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>YOUR RIGHTS AND OPTIONS</Text>
        <Text {...headerProps}>
          Opt-out of marketing emails and other direct marketing.
        </Text>
        <Text {...paragraphProps}>
          You may opt-out of receiving promotional communications, such as
          marketing emails from us by following the instructions in such
          communications.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Opt-out of targeted advertising.</Text>
        <Text {...paragraphProps}>
          You can opt-out of interest-based advertising on mobile applications
          by checking the privacy settings of your Android or iOS device and
          selecting &quot;limit ad tracking&quot; (Apple iOS) or &quot;opt-out
          of interest based ads&quot; (Android).{" "}
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>
          For personalized in-system offers opt-out, you can use the options
          provided in the application settings.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>
          Access the personal data we hold about you.
        </Text>
        <Text {...paragraphProps}>
          If you request, we will provide you a copy of your personal data in an
          electronic format.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Your other rights.</Text>
        <Text {...paragraphProps}>
          You also have the right to correct your data, have your data deleted,
          object how we use or share your data, and restrict how we use or share
          your data. You can always withdraw your consent, for example by
          turning off GPS location sharing in your mobile device settings.
        </Text>
        <Text {...paragraphProps}>
          We will respond to all requests within a reasonable timeframe.{" "}
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>COOKIES AND SIMILAR TECHNOLOGIES</Text>
        <Text {...paragraphProps}>
          Like most online services, we and our partners use cookies and similar
          technologies to provide and personalize the Service, analyze use,
          target advertisements and prevent fraud. You can disable cookies in
          your browser settings, but some parts of the Service may then not
          function properly.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>HOW DO WE PROTECT YOUR DATA</Text>
        <Text {...headerProps}>Security Safeguards.</Text>
        <Text {...paragraphProps}>
          In order to help ensure a secure and safe player experience, we are
          continuously developing and implementing administrative, technical and
          physical security measures to protect your data from unauthorized
          access or against loss, misuse or alteration.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Data retention.</Text>
        <Text {...paragraphProps}>
          We retain your data for as long as your account is active or as needed
          to provide you the Service. We will for example periodically
          de-identify unused accounts and we regularly review and de-identify
          unnecessary data. Note that if you ask us to remove your personal
          data, we will retain your data as necessary for our legitimate
          business interests, such as to comply with our legal obligations,
          resolve disputes, and enforce our agreements.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>AGE LIMITS</Text>
        <Text {...paragraphProps}>
          We do not knowingly collect or solicit personal data about or direct
          or target interest-based advertising to anyone under the age of 13 or
          knowingly allow such persons to use our Services. If you are under 13,
          please do not send any data about yourself to us, including your name,
          address, telephone number, or email address. No one under the age of
          13 may provide any personal data. If we learn that we have collected
          personal data about a child under age 13, we will delete that data as
          quickly as possible. If you believe that we might have any data from
          or about a child under the age of 13, please contact us.
        </Text>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    display: "flex",
    width: "100%",
    justifySelf: "center",
  },
  document: {
    display: "flex",
    justifySelf: "center",
    alignSelf: "center",
    flexDirection: "column",
    paddingBottom: 64,
  },
};

export default TOSView;
