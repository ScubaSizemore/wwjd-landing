import LegalLayout from "./LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" date="March 21, 2026">
      <p>
        WWJD Global Outreach, Inc. ("we," "us," or "our"), a registered 501(c)(3) non-profit
        organization, is committed to protecting your privacy. This Privacy Policy explains how
        we collect, use, and safeguard your information when you visit our website and interact
        with our forms.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide to us when you register for webinars,
        subscribe to our newsletter, or express interest in supporting our mission.
      </p>
      <ul>
        <li><strong>Personal Data:</strong> Names, email addresses, and mobile numbers.</li>
        <li><strong>Engagement Data:</strong> Information regarding your interest in professional volunteering, content creation, or financial partnership and donation opportunities.</li>
        <li><strong>Usage Data:</strong> Automatically collected info via cookies, such as IP addresses and browser types.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your data to fulfill our mission to "Ask the Question, Live the Answer"™, specifically to:
      </p>
      <ul>
        <li><strong>Communicate:</strong> Send newsletters, ministry updates, and information you've requested.</li>
        <li><strong>Development:</strong> Follow up with individuals interested in financial partnerships, grants, or charitable donations to support our 501(c)(3) programs.</li>
        <li><strong>SMS Messaging:</strong> If you have opted in, we send transactional messages (reminders/confirmations) and promotional updates.</li>
        <li><strong>Analytics:</strong> Use Google Analytics to monitor website traffic and improve user experience.</li>
      </ul>

      <h2>3. Text Messaging (SMS) Consent</h2>
      <p>
        By providing your mobile number and checking the consent boxes on our forms, you
        agree to receive messages from us.
      </p>
      <ul>
        <li><strong>Frequency:</strong> Message frequency varies based on your interactions.</li>
        <li><strong>Rates:</strong> Standard message and data rates may apply.</li>
        <li><strong>Opt-Out:</strong> You can reply STOP at any time to unsubscribe. Reply HELP for assistance.</li>
      </ul>

      <h2>4. Third-Party Tracking & Tools</h2>
      <ul>
        <li><strong>Google Analytics:</strong> We use this to track and report website traffic.</li>
        <li><strong>reCAPTCHA:</strong> Our forms are protected by reCAPTCHA to prevent spam, subject to the Google Privacy Policy and Terms of Service.</li>
      </ul>

      <h2>5. Sharing Your Information</h2>
      <p>
        We do not sell, rent, or lease our donor or contact lists to third parties. We only share
        data with trusted service providers (like email or SMS hosts) who assist in our
        operations under strict confidentiality, or when legally required to do so.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        For questions regarding this policy or to request data deletion, please contact:
      </p>
      <p>
        WWJD Global Outreach, Inc.<br />
        7208 E. 135th Street South<br />
        Bixby, OK 74008<br />
        Email: <a href="mailto:policy@wwjd.com">policy@wwjd.com</a>
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
