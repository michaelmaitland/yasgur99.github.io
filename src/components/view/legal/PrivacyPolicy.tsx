import React from "react";
import { StyleSheet } from "../../../constants/Styles";
import { Text } from "../../general";
import LegalHeader from "./LegalHeader";
import { headerProps, paragraphProps } from "./LegalStyles";

export interface PrivacyPolicyViewProps {
  containerStyles?: React.CSSProperties;
}

const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.document}>
        <LegalHeader title="Privacy Policy" />
        <Text {...paragraphProps}>Effective date: April 29, 2019</Text>
        <Text {...paragraphProps}>
          Welcome to Hover.gg (“Hover.gg,” “we,” “us” or “our”)! Hover.gg
          provides a fast and fun way for you to share gaming victories through
          our content-sharing platform. We are concerned about your privacy and
          want you to be familiar with how we collect, use and share your
          information. Our Privacy Policy applies to all visitors, users, and
          others who access the mobile services, web site, and any software
          provided on or in connection with Hover.gg services (collectively, the
          “Service”).
        </Text>
        <Text {...paragraphProps}>
          By using our Service you understand and agree that we are providing a
          platform for you to post content, including photos, comments and other
          materials (“User Content”), to the Service and to share User Content
          publicly. This means that other Users may search for, see, use, or
          share any of your User Content that you make publicly available
          through the Service, consistent with the terms and conditions of this
          Privacy Policy and our Terms of Service (available at
          Hover.GG/TOS[a]).
        </Text>
        <Text {...headerProps}>INFORMATION WE COLLECT</Text>
        <Text {...paragraphProps}>
          We collect the following types of information. By using the Service,
          you expressly consent to the processing of your Personal Information
          according to this Privacy Policy.
        </Text>
        <Text {...headerProps}>Information you provide us directly:</Text>
        <Text {...paragraphProps}>
          Your username, password and e-mail address when you register for a
          Hover.gg account.
        </Text>
        <Text {...paragraphProps}>
          Profile information that you provide for your user profile (e.g.,
          first and last name, picture, phone number). This information allows
          us to help you or others be “found” on Hover.gg.
        </Text>
        <Text {...paragraphProps}>
          User Content (e.g., photos, comments, and other materials) that you
          post to the Service.
        </Text>
        <Text {...paragraphProps}>
          Communications between you and Hover.gg. For example, we may send you
          Service-related emails (e.g., account verification, changes/updates to
          features of the Service, technical and security notices). Note that
          you may not opt out of Service-related e-mails.
        </Text>
        <Text {...paragraphProps}>Finding your friends on Hover.gg:[b]</Text>
        <Text {...paragraphProps}>
          If you choose, you can find friends or other users on Hover.gg
          accounts either through (i) your contacts list, (ii) third-party
          social media sites or (iii) through a search of names and usernames on
          Hover.gg.
        </Text>
        <Text {...paragraphProps}>
          If you choose to find your friends through your contacts list, then
          Hover.gg will access your contacts list to determine whether or not
          someone associated with your contact is using Hover.gg.
        </Text>
        <Text {...paragraphProps}>
          If you choose to find your friends through a third-party social media
          site, then you will be prompted to set up a link to the third-party
          service and you understand that any information that such service may
          provide to us will be governed by this Privacy Policy.
        </Text>
        <Text {...paragraphProps}>
          If you choose to find your friends through a search of names or
          usernames on Hover.gg then simply type a name to search and we will
          perform a search on our Service for you.
        </Text>
        <Text {...paragraphProps}>
          Note about “Invite” feature(s): If you choose to invite someone
          through the Service, you may select a person directly from the
          contacts list on your device and send a p or email from your personal
          account. You understand and agree that you are responsible for any
          charges that apply to communications sent from your device, and
          because this invitation is coming directly from your personal account,
          Hover.gg does not have access to or control this communication.
        </Text>
        <Text {...headerProps}>
          Cookies, device identifiers and similar technologies:
        </Text>
        <Text {...paragraphProps}>
          When you visit the Service, we may use cookies and similar
          technologies like pixels, web beacons, and local storage to collect
          information about how you use Hover.gg and provide features to you.
        </Text>
        <Text {...paragraphProps}>
          When you use a mobile device like a tablet or phone to access our
          Service, we may access, collect, monitor, store on your device, and/or
          remotely store one or more “device identifiers.” Device identifiers
          are small data files or similar data structures stored on or
          associated with your mobile device, which uniquely identify your
          mobile device. A device identifier may be data stored in connection
          with the device hardware, data stored in connection with the
          device&apos;s operating system or other software, or data sent to the
          device by Hover.gg.
        </Text>
        <Text {...paragraphProps}>
          A device identifier may deliver information to us or to a third party
          partner about how you browse and use the Service and may help us or
          others provide reports or personalized content and ads. Some features
          of the Service may not function properly if use or availability of
          device identifiers is impaired or disabled.
        </Text>
        <Text {...paragraphProps}>
          We may ask advertisers or other partners to serve ads or services to
          your devices, which may use cookies or similar technologies placed by
          us or the third party.
        </Text>
        <Text {...headerProps}>Log file and other analytics:</Text>
        <Text {...paragraphProps}>
          Log file information is automatically reported by your browser each
          time you make a request to access (i.e., visit) a web page or app. It
          can also be provided when the content of the webpage or app is
          downloaded to your browser or device.
        </Text>
        <Text {...paragraphProps}>
          When you use our Service, our servers automatically record certain log
          file information, including your web request, Internet Protocol (“IP”)
          address, browser type, referring / exit pages and URLs, number of
          clicks and how you interact with links on the Service, domain names,
          landing pages, pages viewed, and other such information. We may also
          collect similar information from emails sent to our Users which then
          help us track which emails are opened and which links are clicked by
          recipients.
        </Text>
        <Text {...paragraphProps}>
          We may use third-party analytics tools to help us measure traffic and
          usage trends for the Service. These tools collect information sent by
          your device or our Service, including the web pages you visit,
          add-ons, and other information to assist us in improving the Service.
          This analytics information is aggregated with analytics information
          from other Users so that it cannot reasonably be used to identify any
          particular individual User.
        </Text>
        <Text {...paragraphProps}>
          The information allows for more accurate reporting and improvement of
          the Service.
        </Text>
        <Text {...headerProps}>Feedback:</Text>
        <Text {...paragraphProps}>
          If you provide feedback on any of our Services, we may use such
          feedback for any commercially reasonable purpose. Hover.gg will
          collect any information contained in such communication and will treat
          the Personal Information in such communication in accordance with this
          Privacy Policy.
        </Text>
        <Text {...headerProps}>Metadata:</Text>
        <Text {...paragraphProps}>
          Metadata is usually technical data that is associated with User
          Content. For example, Metadata can describe how, when and by whom a
          piece of User Content was collected and how that content is formatted.
        </Text>
        <Text {...paragraphProps}>
          Users can add or may have Metadata added to their User Content
          including a hashtag (e.g., to mark keywords when you post), geotag
          (e.g., to mark your location), comments or other data. This makes your
          User Content more searchable by others and more interactive. If you
          geotag your User Content then, your latitude and longitude will be
          stored with the content and searchable (e.g., through a location or
          map feature) if your content is made public by you in accordance with
          your privacy settings.[c]
        </Text>
        <Text {...headerProps}>HOW WE USE YOUR INFORMATION</Text>
        <Text {...headerProps}>
          In addition to some of the specific uses of information we describe in
          this Privacy Policy, we may use information that we receive to:
        </Text>
        <Text {...paragraphProps}>
          help you efficiently access your information after you sign in
        </Text>
        <Text {...paragraphProps}>
          remember information so you will not have to re-enter it during your
          visit or the next time you visit the Service;
        </Text>
        <Text {...paragraphProps}>
          provide personalized content and information to you and others, which
          could include online ads or other forms of marketing
        </Text>
        <Text {...paragraphProps}>
          provide, improve, test, and monitor the effectiveness of our Service
        </Text>
        <Text {...paragraphProps}>
          develop and test new products and features
        </Text>
        <Text {...paragraphProps}>
          monitor metrics such as total number of visitors, traffic, and
          demographic patterns
        </Text>
        <Text {...paragraphProps}>diagnose or fix technology problems</Text>
        <Text {...paragraphProps}>
          automatically update the Hover.gg application on your device
        </Text>
        <Text {...paragraphProps}>
          Hover.gg or other Users may run contests, special offers or other
          events or activities (“Events”) on the Service. If you do not want to
          participate in an Event, do not use the particular Metadata (i.e.
          hashtag or geotag) associated with that Event.
        </Text>
        <Text {...headerProps}>SHARING OF YOUR INFORMATION</Text>
        <Text {...paragraphProps}>
          We will not rent or sell your information to third parties outside
          Hover.gg (or the group of companies of which Hover.gg is a part)
          without your consent, except as noted in this Policy.{" "}
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>
          Parties with whom we may share your information:
        </Text>
        <Text {...paragraphProps}>
          We may share User Content and your information with our affiliated
          companies (“Affiliates”). Affiliates will honor the choices you make
          about who can see your User Content.
        </Text>
        <Text {...paragraphProps}>
          We also may share your information as well as information from tools
          like cookies, log files, and device identifiers and location data,
          with third-party organizations that help us provide the Service to
          you, including advertising partners (“Service Providers”). Our Service
          Providers will be given access to your information as is reasonably
          necessary to provide the Service under reasonable confidentiality
          terms.
        </Text>
        <Text {...paragraphProps}>
          We may remove parts of data that can identify you and share anonymized
          data with other parties. We may also combine your information with
          other information in a way that it is no longer associated with you
          and share that aggregated information.
        </Text>
        <Text {...headerProps}>
          Parties with whom you may choose to share your User Content:
        </Text>
        <Text {...paragraphProps}>
          Any information or content that you voluntarily disclose for posting
          to the Service, such as User Content, becomes available to the public,
          as controlled by any applicable privacy settings that you set. To
          change your privacy settings on the Service, please change your
          profile setting. Once you have shared User Content or made it public,
          that User Content may be re-shared by others.[d]
        </Text>
        <Text {...paragraphProps}>
          Subject to your profile and privacy settings, any User Content that
          you make public is searchable by other Users.
        </Text>
        <Text {...paragraphProps}>
          If you remove information that you posted to the Service, copies may
          remain viewable in cached and archived pages of the Service, or if
          other Users have copied or saved that information.
        </Text>
        <Text {...headerProps}>
          What happens in the event of a change of control:
        </Text>
        <Text {...paragraphProps}>
          If we sell or otherwise transfer part or the whole of Hover.gg or our
          assets to another organization (e.g., in the course of a transaction
          like a merger, acquisition, bankruptcy, dissolution, liquidation),
          your information such as name and email address, User Content and any
          other information collected through the Service may be among the items
          sold or transferred. You will continue to own your User Content. The
          buyer or transferee will have to honor the commitments we have made in
          this Privacy Policy.
        </Text>
        <Text {...headerProps}>
          Responding to legal requests and preventing harm:
        </Text>
        <Text {...paragraphProps}>
          We may access, preserve and share your information in response to a
          legal request (like a search warrant, court order or subpoena) if we
          have a good faith belief that the law requires us to do so. We may
          also access, preserve and share information when we have a good faith
          belief it is necessary to: detect, prevent and address fraud and other
          illegal activity; to protect ourselves, you or others, including as
          part of investigations; and to prevent death or imminent bodily harm.
          Information we receive about you may be accessed, processed and
          retained for an extended period of time when it is the subject of a
          legal request or obligation, governmental investigation, or
          investigations concerning possible violations of our terms or
          policies, or otherwise to prevent harm.
        </Text>
        <Text {...headerProps}>HOW WE STORE YOUR INFORMATION</Text>
        <Text {...headerProps}>Storage and Processing:</Text>
        <Text {...paragraphProps}>
          Your information collected through the Service may be stored and
          processed in the United States or any other country in which Hover.gg,
          its Affiliates or Service Providers maintain facilities.
        </Text>
        <Text {...paragraphProps}>
          Hover.gg, its Affiliates, or Service Providers may transfer
          information that we collect about you, including personal information
          across borders and from your country or jurisdiction to other
          countries or jurisdictions around the world. If you are located in the
          European Union or other regions with laws governing data collection
          and use that may differ from U.S. law, please note that we may
          transfer information, including personal information, to a country and
          jurisdiction that does not have the same data protection laws as your
          jurisdiction.
        </Text>
        <Text {...paragraphProps}>
          By registering for and using the Service you consent to the transfer
          of information to the U.S. or to any other country in which Hover.gg,
          its Affiliates or Service Providers maintain facilities and the use
          and disclosure of information about you as described in this Privacy
          Policy.
        </Text>
        <Text {...paragraphProps}>
          We use commercially reasonable safeguards to help keep the information
          collected through the Service secure and take reasonable steps (such
          as requesting a unique password) to verify your identity before
          granting you access to your account. However, Hover.gg cannot ensure
          the security of any information you transmit to Hover.gg or guarantee
          that information on the Service may not be accessed, disclosed,
          altered, or destroyed.
        </Text>
        <Text {...paragraphProps}>
          You are responsible for maintaining the secrecy of your unique
          password and account information, and for controlling access to
          emails, ps or other communications between you and Hover.gg, at all
          times. Your privacy settings may also be affected by changes to the
          social media services you connect to Hover.gg. We are not responsible
          for the functionality, privacy, or security measures of any other
          organization.
        </Text>
        <Text {...headerProps}>YOUR CHOICES ABOUT YOUR INFORMATION</Text>
        <Text {...headerProps}>
          Your account information and profile/privacy settings:
        </Text>
        <Text {...paragraphProps}>
          Update your account at any time by logging in and changing your
          profile settings.
        </Text>
        <Text {...paragraphProps}>
          Unsubscribe from email communications from us by clicking on the
          provided “unsubscribe” link. As noted above, you may not opt out of
          Service-related communications (e.g., account verification, purchase
          and billing confirmations and reminders, changes/updates to features
          of the Service, technical and security notices).
        </Text>
        <Text {...headerProps}>How long we keep your User Content:</Text>
        <Text {...paragraphProps}>
          Following termination or deactivation of your account, Hover.gg, its
          Affiliates, or its Service Providers may retain information (including
          your profile information) and User Content for a commercially
          reasonable time for backup, archival, and/or audit purposes.
        </Text>
        <Text {...headerProps}>CHILDREN&apos;S PRIVACY</Text>
        <Text {...paragraphProps}>
          Hover.gg does not knowingly collect or solicit any information from
          anyone under the age of 13 or knowingly allow such persons to register
          for the Service. The Service and its content are not directed at
          children under the age of 13. In the event that we learn that we have
          collected personal information from a child under age 13 without
          parental consent, we will delete that information as quickly as
          practicable. If you believe that we might have any information from or
          about a child under 13, please contact us at legal@skwads.com[e].
        </Text>
        <Text {...headerProps}>OTHER WEB SITES AND SERVICES</Text>
        <Text {...paragraphProps}>
          We are not responsible for the practices employed by any websites or
          services linked to or from our Service, including the information or
          content contained within them. Please remember that when you use a
          link to go from our Service to another website or service, our Privacy
          Policy does not apply to those third-party websites or services. Your
          browsing and interaction on any third-party website or service,
          including those that have a link on our website, are subject to that
          third party&apos;s own rules and policies. In addition, you agree that
          we are not responsible and do not have control over any third-parties
          that you authorize to access your User Content. If you are using a
          third-party website or service and you allow them to access your User
          Content you do so at your own risk.
        </Text>
        <Text {...headerProps}>HOW TO CONTACT US ABOUT A DECEASED USER</Text>
        <Text {...paragraphProps}>
          In the event of the death of a Hover.gg User, please contact us at
          legal@skwads.com. We will usually conduct our communication via email;
          should we require any other information, we will contact you at the
          email address you have provided in your request.
        </Text>
        <Text {...headerProps}>HOW TO CONTACT US</Text>
        <Text {...paragraphProps}>
          If you have any questions about this Privacy Policy, please contact us
          at legal@skwads.com.
        </Text>
        <Text {...headerProps}>CHANGES TO OUR PRIVACY POLICY</Text>
        <Text {...paragraphProps}>
          This Privacy Policy is subject to occasional revision in accordance
          with our Terms of Service. Changes to this Privacy Policy may affect
          our use of Personal Information that you provided us prior to our
          notification to you of the changes. Your only recourse if you do not
          wish to permit changes in our use of your Personal Information, is to
          deactivate your account by sending us notice as soon as you become
          aware of such changes. Your continued use of the Service after any
          modification to this Privacy Policy will constitute your acceptance of
          such modification.
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

export default PrivacyPolicyView;
