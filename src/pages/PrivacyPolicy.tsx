import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" date="April 1, 2026">
      <p>
        WWJD Global Outreach, Inc. ("WWJD," "we," "us," or "our") operates the WWJD.com application
        (the "App"), available at app.wwjd.com and through the Apple App Store and Google Play Store.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
        you use our App. Please read this policy carefully. By using the App, you consent to the
        practices described in this Privacy Policy.
      </p>
      <p>
        If you do not agree with the terms of this Privacy Policy, please do not access or use the App.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <ul>
        <li>
          <strong>Account Information:</strong> When you create an account, we collect your name and
          email address. Authentication is managed through our service provider, Supabase.
        </li>
        <li>
          <strong>Prayer Journal Entries:</strong> Text entries you write in your personal prayer journal.
          These are private and visible only to you.
        </li>
        <li>
          <strong>Heart Compass Data:</strong> Emotion tracking entries you submit through the Heart
          Compass feature, including selected emotions, intensity levels, and optional notes.
        </li>
        <li>
          <strong>Bible Highlights and Notes:</strong> Passages you highlight and notes you attach to
          Bible verses.
        </li>
        <li>
          <strong>Community Posts:</strong> Content you post in community discussion areas. Community
          posts are visible to other members of your community and are not private.
        </li>
        <li>
          <strong>Family Hub Data:</strong> If you use the Family Hub feature, we collect family member
          names and ages that you provide to personalize the family experience.
        </li>
        <li>
          <strong>Growth Track Progress:</strong> Your progress through growth tracks, lesson completions,
          and related interactions.
        </li>
        <li>
          <strong>Devotional Interaction Data:</strong> Your engagement with daily devotionals, including
          completions and reflections.
        </li>
        <li>
          <strong>Payment Information:</strong> When you make a donation or subscribe to a paid plan,
          payment details (such as credit card number and billing address) are collected and processed
          directly by Stripe, our payment processor. We do not store your full payment card details on
          our servers.
        </li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Device Information:</strong> When you opt in to push notifications, we collect device
          tokens and related technical identifiers necessary to deliver notifications to your device.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect general usage information such as pages visited,
          features used, and session duration to improve the App experience.
        </li>
      </ul>

      <h3>1.3 Information Processed by AI Features</h3>
      <p>
        The App includes AI-powered features such as content generation and a book companion chat.
        When you use these features, the text of your queries or prompts is sent to our AI service
        providers for processing. We do not use your personal prayer journal entries, emotion data, or
        other private data as training data for AI models. AI-generated responses are provided for
        informational and inspirational purposes only.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain the App and its features</li>
        <li>Create and manage your account</li>
        <li>Personalize your experience (e.g., age-appropriate content, language preferences)</li>
        <li>Process transactions and send related information (receipts, confirmations)</li>
        <li>Send push notifications you have opted in to receive</li>
        <li>Facilitate community features and interactions</li>
        <li>Generate AI-powered content and responses to your queries</li>
        <li>Produce text-to-speech audio for devotionals and other content</li>
        <li>Improve the App, diagnose technical issues, and develop new features</li>
        <li>Communicate with you about updates, changes, or support inquiries</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. How We Store and Protect Your Data</h2>
      <p>
        Your data is stored using Supabase, a cloud-hosted PostgreSQL database platform. Data is
        encrypted at rest and in transit using industry-standard encryption protocols (TLS/SSL for
        data in transit, AES-256 for data at rest).
      </p>
      <p>
        We implement appropriate technical and organizational measures to protect your personal
        information against unauthorized access, alteration, disclosure, or destruction. However,
        no method of electronic storage or transmission over the Internet is 100% secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>4. Third-Party Services and Data Sharing</h2>
      <p>
        We do not sell your personal information to third parties. We share information with the
        following service providers solely to operate the App:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> Database hosting, user authentication, and real-time data services.
          Supabase processes your account information and all App data.{" "}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
            Supabase Privacy Policy
          </a>
        </li>
        <li>
          <strong>Stripe:</strong> Payment processing for subscriptions and donations. Stripe receives
          your payment card details and billing information.{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            Stripe Privacy Policy
          </a>
        </li>
        <li>
          <strong>ElevenLabs:</strong> Text-to-speech audio generation. Devotional and other content text
          is sent to ElevenLabs to produce audio versions. No personal user data is shared.{" "}
          <a href="https://elevenlabs.io/privacy-policy" target="_blank" rel="noopener noreferrer">
            ElevenLabs Privacy Policy
          </a>
        </li>
        <li>
          <strong>AI Service Providers:</strong> AI-powered content generation and chat features are
          processed by third-party AI providers. Your queries and prompts are sent for processing, but
          we do not share your name, email, or other personal identifiers with these providers.
        </li>
      </ul>
      <p>
        We may also disclose your information if required by law, regulation, legal process, or
        governmental request, or if we believe disclosure is necessary to protect our rights, your
        safety, or the safety of others.
      </p>

      <h2>5. Children's Privacy (COPPA Compliance)</h2>
      <p>
        The App includes content designed for children ages 5 and older (the "Kids" content tier).
        We take the privacy of children very seriously and comply with the Children's Online Privacy
        Protection Act (COPPA).
      </p>
      <ul>
        <li>
          <strong>Parental Consent Required:</strong> Children under the age of 13 may only use the App
          under a parent or guardian's account through the Family Hub feature. We do not knowingly
          collect personal information directly from children under 13 without verifiable parental consent.
        </li>
        <li>
          <strong>Limited Data Collection:</strong> For child profiles created within the Family Hub,
          we collect only the child's first name and age, as provided by the parent or guardian. Children
          do not have independent accounts, email addresses, or login credentials.
        </li>
        <li>
          <strong>No Behavioral Advertising:</strong> We do not serve behavioral or targeted advertising
          to children.
        </li>
        <li>
          <strong>Parental Rights:</strong> Parents and guardians may review the personal information
          collected about their child, request its deletion, and refuse to permit further collection
          by contacting us at privacy@wwjd.com.
        </li>
      </ul>
      <p>
        If we learn that we have collected personal information from a child under 13 without parental
        consent, we will delete that information promptly.
      </p>

      <h2>6. Cookies and Local Storage</h2>
      <p>
        The App uses cookies and browser local storage for the following purposes:
      </p>
      <ul>
        <li>
          <strong>Authentication:</strong> Session cookies and tokens to keep you signed in.
        </li>
        <li>
          <strong>Preferences:</strong> Storing your theme preference (light/dark mode), language
          selection, and other App settings.
        </li>
        <li>
          <strong>Service Worker:</strong> As a Progressive Web App, we use a service worker that
          caches content locally on your device for offline access and improved performance.
        </li>
      </ul>
      <p>
        We do not use third-party advertising or analytics cookies. You may clear cookies and local
        storage through your browser settings, though doing so may require you to sign in again.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to
        provide you with the App's services. Specifically:
      </p>
      <ul>
        <li>
          <strong>Account Data:</strong> Retained until you delete your account.
        </li>
        <li>
          <strong>Prayer Journal, Notes, and Personal Data:</strong> Retained until you delete the
          individual entries or your account.
        </li>
        <li>
          <strong>Community Posts:</strong> Retained until you delete them or your account is terminated.
          Deleted posts may persist in backups for up to 30 days.
        </li>
        <li>
          <strong>Payment Records:</strong> Transaction records are retained as required by applicable
          tax and financial regulations (typically 7 years).
        </li>
        <li>
          <strong>AI Query Logs:</strong> AI interaction logs may be retained for up to 90 days for
          quality and safety monitoring, after which they are deleted.
        </li>
      </ul>
      <p>
        When you delete your account, we will delete or anonymize your personal data within 30 days,
        except where retention is required by law.
      </p>

      <h2>8. Your Rights and Choices</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li>
          <strong>Access:</strong> You may request a copy of the personal data we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> You may update or correct your account information through the
          App's Settings page.
        </li>
        <li>
          <strong>Deletion:</strong> You may request deletion of your account and associated personal
          data by contacting us at privacy@wwjd.com or through the Settings page in the App.
        </li>
        <li>
          <strong>Data Export:</strong> You may request an export of your personal data in a
          machine-readable format.
        </li>
        <li>
          <strong>Push Notifications:</strong> You may opt out of push notifications at any time
          through your device settings or the App's notification preferences.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at privacy@wwjd.com. We will respond to your
        request within 30 days.
      </p>

      <h2>9. California Privacy Rights (CCPA/CPRA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act (CCPA) and the
        California Privacy Rights Act (CPRA) provide you with additional rights:
      </p>
      <ul>
        <li>
          <strong>Right to Know:</strong> You have the right to request that we disclose the categories
          and specific pieces of personal information we have collected about you, the categories of
          sources, the purposes for collection, and the categories of third parties with whom we share it.
        </li>
        <li>
          <strong>Right to Delete:</strong> You have the right to request deletion of your personal
          information, subject to certain exceptions.
        </li>
        <li>
          <strong>Right to Opt-Out of Sale:</strong> We do not sell your personal information. We do
          not share your personal information for cross-context behavioral advertising.
        </li>
        <li>
          <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for
          exercising any of your CCPA/CPRA rights.
        </li>
        <li>
          <strong>Right to Correct:</strong> You have the right to request correction of inaccurate
          personal information.
        </li>
      </ul>
      <p>
        To submit a CCPA/CPRA request, contact us at privacy@wwjd.com. We may need to verify your
        identity before processing your request.
      </p>

      <h2>10. International Users (GDPR)</h2>
      <p>
        If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland,
        you have additional rights under the General Data Protection Regulation (GDPR):
      </p>
      <ul>
        <li>
          <strong>Legal Basis for Processing:</strong> We process your personal data based on your
          consent (e.g., when you create an account), the performance of a contract (e.g., providing
          the App's services), and our legitimate interests (e.g., improving the App and preventing fraud).
        </li>
        <li>
          <strong>Data Transfers:</strong> Your data may be transferred to and processed in the United
          States. We rely on standard contractual clauses and other approved transfer mechanisms to
          ensure appropriate safeguards for international data transfers.
        </li>
        <li>
          <strong>Additional Rights:</strong> In addition to the rights listed in Section 8, you have
          the right to restrict processing, the right to data portability, and the right to lodge a
          complaint with your local data protection authority.
        </li>
        <li>
          <strong>Withdrawal of Consent:</strong> Where processing is based on consent, you may
          withdraw your consent at any time without affecting the lawfulness of processing performed
          before withdrawal.
        </li>
      </ul>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes, we will
        notify you by posting the updated policy in the App with a revised "Effective Date" at the top,
        and where appropriate, we will notify you by email or through a prominent notice in the App.
      </p>
      <p>
        Your continued use of the App after any changes to this Privacy Policy constitutes your
        acceptance of those changes. We encourage you to review this policy periodically.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy or our data
        practices, please contact us at:
      </p>
      <p>
        <strong>WWJD Global Outreach, Inc.</strong><br />
        Email: <a href="mailto:privacy@wwjd.com">privacy@wwjd.com</a><br />
        Website: <a href="https://wwjd.com">wwjd.com</a>
      </p>

      <p>
        See also our{" "}
        <Link to="/terms">Terms of Service</Link>.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
