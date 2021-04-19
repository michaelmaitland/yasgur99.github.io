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
        <LegalHeader title="Terms of Service" />
        <Text {...paragraphProps}>
          Welcome to Hover! These Terms of Use govern your use of Hover and
          provide information about the Hover Service, outlined below. When you
          create an Hover account (“Account”) or use Hover, you agree to these
          terms. Skwads, LLC, a Delaware limited liability company (“Skwads,”
          “we” or “us”) is the creator of Hover, and these Terms of Use are an
          agreement between you and Skwads. BY INSTALLING, USING OR OTHERWISE
          ACCESSING THE SERVICE, YOU AGREE TO THESE TERMS OF USE. IF YOU DO NOT
          AGREE TO THESE TERMS, PLEASE DO NOT INSTALL, USE OR OTHERWISE ACCESS
          THE SERVICE. USE OF THE SERVICE IS VOID WHERE PROHIBITED.
        </Text>
        <Text {...paragraphProps}>
          ARBITRATION NOTICE: YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE
          RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT
          TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. WE
          EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION BELOW.
        </Text>
        <Text {...paragraphProps}>The Hover Service</Text>
        <Text {...paragraphProps}>
          We will provide you with the Hover Service. The Service includes all
          of the Hover products designed to help you create, find, join, and
          share in gaming experiences that matter to you, as well as find others
          who share your passion for gaming.{" "}
        </Text>
        <Text {...paragraphProps}>
          Grant of a Limited License to Use the Service
        </Text>
        <Text {...paragraphProps}>
          Subject to your agreement and continuing compliance with these Terms
          of Use, Skwads grants you a non-exclusive, non-transferable,
          non-sublicensable, revocable and limited license to access and use the
          Hover Service for your own non-commercial entertainment purposes. You
          agree not to use the Service for any other purpose.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>The Data Policy</Text>
        <Text {...paragraphProps}>
          Providing Hover requires collecting and using your information. The
          Data Policy explains how we collect, use, and share information. The
          Data Policy is part of this Agreement and you must agree to the Data
          Policy to use Hover.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Your Commitments</Text>
        <Text {...paragraphProps}>
          In return for the right to use the Service, we require you to make the
          below commitments to us.
        </Text>
        <Text {...paragraphProps}>Who Can Use Hover. </Text>
        <Text {...paragraphProps}>
          By registering for an Account or otherwise using the Service, you
          represent that you are age 13 or older, and that you are not a
          convicted sex offender. If you are between the ages of 13 and 17, you
          represent that your legal guardian has reviewed and agreed to these
          Terms.
        </Text>
        <Text {...paragraphProps}>
          You will restrict use by minors, and you will deny access to children
          under the age of 13. You accept full responsibility for any
          unauthorized use of the Service by minors. You are responsible for any
          use of your credit card or other payment instrument (e.g. paypal) by
          minors.
        </Text>
        <Text {...paragraphProps}>
          You agree to use your Account only for non-commercial purposes; You
          may not use the Service to advertise, or solicit, or transmit any
          commercial advertisements, including chain letters, junk or spam
          e-mail or repetitive or misleading messages to anyone.
        </Text>
        <Text {...paragraphProps}>
          You may not use the Service if you have previously been removed by
          Skwads, or previously been banned from using any Skwads service.
        </Text>
        <Text {...paragraphProps}>
          License Limitations - How You Can&apos;t Use Hover. We wants to
          provide you with a safe and open platform for all users to come
          together and share their gaming passion. To maintain that environment,
          we have to enforce a few rules. Any use of the Service in violation of
          these License Limitations is strictly prohibited, can result in the
          immediate revocation of your limited license and may subject you to
          liability for violations of law. You agree that you will not, under
          any circumstances:
        </Text>
        <Text {...paragraphProps}>
          Engage in any act that Skwads deems to be in conflict with the spirit
          or intent of the Service.
        </Text>
        <Text {...paragraphProps}>
          Modify or cause to be modified any files that are a part of the
          Service without Skwads’ express written consent.
        </Text>
        <Text {...paragraphProps}>
          Disrupt, interfere with or otherwise adversely affect the normal flow
          of the Service or otherwise act in a manner that may negatively affect
          other users&apos; experience when using the Service (including without
          limitation distribution of a virus or denial of service attacks upon
          the Service or users).
        </Text>
        <Text {...paragraphProps}>
          Attempt to buy, sell, or transfer any aspect of your account
          (including your username) or solicit, collect, or use login
          credentials of other users.{" "}
        </Text>
        <Text {...paragraphProps}>
          Attempt to gain unauthorized access to the Service, Accounts
          registered to others or to the computers, Servers, or networks
          connected to the Service by any means other than the user interface
          provided by Skwads.
        </Text>
        <Text {...paragraphProps}>
          Post any information that is abusive, threatening, obscene,
          defamatory, libelous, or racially, sexually, religiously, or otherwise
          objectionable or offensive.
        </Text>
        <Text {...paragraphProps}>
          Post any information that contains nudity, excessive violence, or
          offensive subject matter or that contains a link to such content.
        </Text>
        <Text {...paragraphProps}>
          Attempt to harass, abuse, or harm another person or group.
        </Text>
        <Text {...paragraphProps}>
          Make available through the Service any material or information that
          infringes any copyright, trademark, patent, trade secret, right of
          privacy, right of publicity, or other right of any person (including
          without limitation rights in confidential information) or entity or
          impersonates any other person.
        </Text>
        <Text {...paragraphProps}>
          Reverse engineer, decompile, disassemble, decipher or otherwise
          attempt to derive the source code for any underlying software or other
          intellectual property used to provide the Service.
        </Text>
        <Text {...paragraphProps}>
          Collect or post anyone&apos;s private information, including
          personally identifiable information (whether in text, image or video
          form), identification documents, or financial information through the
          Service.
        </Text>
        <Text {...paragraphProps}>
          Skwads reserves the right to determine what conduct it considers to be
          in violation of the rules of use or otherwise outside the intent or
          spirit of these Terms of Use or the Service itself. Skwads reserves
          the right to take action as a result, which may include terminating
          your Account and prohibiting you from using the Service in whole or in
          part.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Content and Ownership Rights. </Text>
        <Text {...paragraphProps}>
          By providing content through Hover, you make certain representations
          about the content of the transmission or submission.{" "}
        </Text>
        <Text {...paragraphProps}>
          “Content” means any communications, images, sounds, and all the
          material, data, and information that you upload or transmit through
          the Service, or that other users upload or transmit, including without
          limitation any chat text. By transmitting or submitting any Content
          while using the Service, you represent and warrant that such Content
          is (a) not confidential or misleading; (b) not in violation of any
          laws, and that you have permission from any third party whose personal
          information or intellectual property is comprised in the Content or
          who claims any rights in the Content; and (c) free of viruses, adware,
          spyware, worms or other malicious code. You also agree that any of
          your personal information within such Content will be subject to the
          Data Policy.
        </Text>
        <Text {...paragraphProps}>
          We do not claim ownership of your Content, but you grant us a license
          to use it.When you share, post, or upload Content that is covered by
          intellectual property rights (like photos or videos) on or in
          connection with our Service, you hereby grant to us an irrevocable,
          non-exclusive, royalty-free, transferable, sub-licensable, worldwide
          license to host, use, distribute, modify, run, copy, publicly perform
          or display, translate, and create derivative works of your Content
          (consistent with your privacy and application settings). You can end
          this license anytime by deleting your Content or Account. However,
          Content will continue to appear if you shared it with others and they
          have not deleted it.{" "}
        </Text>
        <Text {...paragraphProps}>
          You grant us permission to use your username, profile picture, and
          information about your relationships and actions with accounts, ads,
          and sponsored content, without any compensation to you.
        </Text>
        <Text {...paragraphProps}>
          Skwads assumes no responsibility for the conduct of any user
          submitting any content, and assumes no responsibility for monitoring
          the Service for inappropriate content or conduct. We do not, and
          cannot, pre-screen or monitor all user content. Nor can we control
          what users do with content accessed through the Service. Your use of
          the Service is at your own risk. By using the Service, you may be
          exposed to user content that is offensive, indecent or otherwise not
          in line with your expectations. You bear all risks associated with the
          use of any user content available in connection with the Service. At
          our discretion, our representatives or technology may monitor and/or
          record your interaction with the Service or communications (including
          without limitation chat text) when you are using the Service. By
          entering into these Terms of Use, you hereby provide your irrevocable
          consent to such monitoring and recording. You acknowledge and agree
          that you have no expectation of privacy concerning the transmission of
          any user content, including without limitation chat text or voice
          communications. We have the right, but not the obligation, in our sole
          discretion to edit, refuse to post, or remove any Content.
        </Text>
        <Text {...paragraphProps}>
          You agree that we can download and install updates to the Service on
          your device, with or without notifying you. We may require that you
          accept updates to the Service and to applications you have installed
          on your device or computer.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Additional Rights We Retain</Text>
        <Text {...paragraphProps}>
          If you select a username or similar identifier for your account, we
          may change it if we believe it is appropriate or necessary (for
          example, if it uses obscene language or infringes someone&apos;s
          intellectual property or impersonates another user).
        </Text>
        <Text {...paragraphProps}>
          All rights, title and interest in and to the Service (including
          without limitation any concepts, artwork, audio-visual effects,
          methods of operation, documentation and the Hover clients and server
          software) are owned by Skwads. Skwads reserves all rights, including
          without limitation, all intellectual property rights or other
          proprietary rights, in connection with its Service.
        </Text>
        <Text {...paragraphProps}>
          Notwithstanding anything to the contrary herein, you acknowledge and
          agree that you will have no ownership or other property interest in
          the Account, and you further acknowledge and agree that all rights in
          and to the Account (other than the content you provide) are and shall
          forever be owned by and inure to the benefit of Skwads.Without
          limiting any other remedies, Skwads may suspend, limit, modify,
          terminate or delete Accounts or access to the Service in whole or in
          part if you violate or Skwads suspects that your conduct has or may
          violate these Terms of Use or any applicable laws or create risk or
          legal liabilities for Skwads, and is under no obligation to compensate
          you for any loss that results (including without limitation the
          Account, any content associated with it and any purchased items). We
          also reserve the right to terminate any Account that is inactive for
          180 days.
        </Text>
        <Text {...paragraphProps}>
          Skwads reserves the right to stop offering and/or supporting the
          Service or any portion of the Service at any time, at which point your
          license to use the Service or a part thereof will be automatically
          terminated. Skwads will not be required to provide refunds, benefits
          or other compensation to users in connection with such discontinued
          Service.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Content Removal Terminating Your Account</Text>
        <Text {...paragraphProps}>
          Content you delete may persist for a limited period of time in backup
          copies and will still be visible where others have shared it. This
          paragraph, and the section below called &quot;The Agreement and
          Disputes Under These Terms,&quot; will continue to apply even after
          your account is terminated or deleted.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>
          The Agreement and Disputes Under These Terms
        </Text>
        <Text {...paragraphProps}>The Agreement.</Text>
        <Text {...paragraphProps}>
          If any aspect of this agreement is unenforceable, the rest will remain
          in effect.
        </Text>
        <Text {...paragraphProps}>
          Any amendment or waiver to our agreement must be in writing and signed
          by us. If we fail or delay to enforce any aspect of this agreement, it
          will not be a waiver.
        </Text>
        <Text {...paragraphProps}>
          We reserve all rights not expressly granted to you.
        </Text>
        <Text {...paragraphProps}>Who Has Rights Under this Agreement.</Text>
        <Text {...paragraphProps}>
          These Terms of Use, together with the Data Policy and any documents
          expressly incorporated by reference, is the entire agreement between
          you and Skwads concerning the Service, and replaces any other
          agreement in any form between you and us with respect to the Service.
        </Text>
        <Text {...paragraphProps}>
          This agreement does not give rights to any third parties.
        </Text>
        <Text {...paragraphProps}>
          You cannot transfer your rights or obligations under this agreement
          without our consent.
        </Text>
        <Text {...paragraphProps}>
          Our rights and obligations can be assigned to others at any time,
          without consent. For example, this could occur if our ownership
          changes (as in a merger, acquisition, or sale of assets) or by law.
        </Text>
        <Text {...paragraphProps}>Our Liability Is Limited.</Text>
        <Text {...paragraphProps}>
          The Service is provided &quot;as is&quot; and “as available” with all
          faults, and we make no assurance it will be safe, secure or virus or
          error-free. TO THE EXTENT PERMITTED BY LAW, WE ALSO DISCLAIM ALL
          WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, AND NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING
          OR USE OF TRADE.
        </Text>
        <Text {...paragraphProps}>
          To the maximum extent allowed by law, our liability or responsibility
          for anything that happens on or in connection with the Service. Skwads
          is not responsible for your use of the Service or for any lost
          profits, revenues, information, or data, or consequential, special,
          indirect, exemplary, punitive, or incidental damages arising out of or
          related to the Service, even if we have been advised of the
          possibility of such damages. This includes when we delete your
          content, information, or account. To the extent allowed by law, our
          aggregate liability arising out of or relating to the Service or these
          Terms of Use will not exceed the greater of $100 or the amount you
          have paid us for the Service in the six months preceding the date your
          claim arises. Without limiting the foregoing, you will always have the
          remedy to stop using the Service.{" "}
        </Text>
        <Text {...paragraphProps}>
          Nothing in this section will limit our liability where not allowed by
          law, for example, for liability arising from our gross negligence.{" "}
        </Text>
        <Text {...paragraphProps}>
          You agree to defend (at our request), indemnify and hold us harmless
          from and against any claims, liabilities, damages, losses, and
          expenses, including without limitation, reasonable attorney&apos;s
          fees and costs, arising out of or in any way connected with your use
          of the Service or breach of these Terms of Use. You agree to cooperate
          with us in the defense of any claim. We reserve the right to assume
          the exclusive defense and control of any matter subject to
          indemnification by you, and you will not in any event settle any claim
          without our prior written consent.
        </Text>
        <Text {...paragraphProps}>
          You acknowledge that the rights granted and obligations made under
          these Terms of Use are of a unique and irreplaceable nature, the loss
          of which will cause Skwads to suffer irreparable harm which cannot be
          replaced by monetary damages alone, such that Skwads shall be entitled
          to injunctive or other equitable relief (without the obligations of
          posting any bond or surety or proof of damages) in the event of any
          breach or anticipatory breach of these Terms by you.
        </Text>
        <Text {...paragraphProps}>
          You irrevocably waive all rights to seek injunctive or other equitable
          relief, or to enjoin or restrain the operation of the Service,
          exploitation of any advertising or other materials issued in
          connection therewith, or exploitation of the Service or any content or
          other material used or displayed through the Service and agree to
          limit your claims to claims for monetary damages (if any), limited by
          this Section.
        </Text>
        <Text {...paragraphProps}>How We Will Handle Disputes.</Text>
        <Text {...paragraphProps}>
          If you have a dispute, we strongly encourage you to first contact us
          through customer support to seek resolution. If a dispute cannot be
          resolved through discussion, then except as provided below, to the
          maximum extent permitted by law, except for temporary, preliminary, or
          permanent injunctive relief any cause of action, legal claim, or
          dispute between you and us arising out of or related to these Terms
          Hover (&quot;claim(s)&quot;) must be resolved by arbitration on an
          individual basis. Cass actions / arbitrations are not permitted as
          disclosed above. The American Arbitration Association will administer
          all arbitrations under its Consumer Arbitration Rules. Any arbitration
          will be held in New York, New York, USA. You and we expressly waive a
          trial by jury.
        </Text>
        <Text {...paragraphProps}>
          Notwithstanding, disputes related to intellectual property (like
          copyrights and trademarks), or efforts to interfere with the Service
          or engage with the Service in unauthorized ways (for example,
          automated ways). In addition, any claim for temporary, preliminary, or
          permanent injunctive relief will not be subject to the foregoing
          arbitration requirement.
        </Text>
        <Text {...paragraphProps}>
          This arbitration provision is governed by the Federal Arbitration Act.
        </Text>
        <Text {...paragraphProps}>
          For any claim that is not arbitrated, you agree that it will be
          resolved exclusively in the United States in the state or federal
          courts of the State of New York, in New York County. You also agree to
          submit to the personal jurisdiction of either of these courts for the
          purpose of litigating any such claim.
        </Text>
        <Text {...paragraphProps}>
          The laws of the State of New York, to the extent not preempted by or
          inconsistent with federal law, will govern these Terms and any claim,
          without regard to conflict of law provisions.
        </Text>
        <Text {...paragraphProps}>
          All requests for arbitration and other notices given by you or
          required from you under these Terms of Use or the Data Policy shall be
          in writing and addressed to: Skwads, LLC Attn: Legal, 55 Water Street,
          Floor 32, New York NY 10041. Any notices that you provide without
          compliance with this Section shall have no legal effect.
        </Text>
        <Text {...paragraphProps}>Feedback.</Text>
        <Text {...paragraphProps}>
          You may communicate to us suggested modifications, design changes, or
          improvements to the Service. Skwads will have any and all rights and
          interests in any such feedback without the payment of any
          consideration, and will have no obligation to keep such feedback
          confidential.
        </Text>
        <Text {...paragraphProps} />
        <Text {...headerProps}>Updates to the Service or These Terms</Text>
        <Text {...paragraphProps}>
          We reserve the right to change our Service and policies, including
          these Terms of Use and our Data Policy at any time by posting the
          amended terms on the Skwads website or the Service. Your continued use
          of the Service will be deemed acceptance of the revised terms. If at
          any time you do not want to agree to these or any updated Terms, your
          license and right to use the Service will immediately terminate, and
          you may delete your Account, here.
        </Text>
        <Text {...paragraphProps}>Revised: November 14, 2019</Text>
        <Text {...paragraphProps} />
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
