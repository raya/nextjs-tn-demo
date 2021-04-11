export default function Wireless({ result }) {
  return <div>Wireless Page
    API Result {result.name}
    <div>
      Orci etiam lobortis fusce velit venenatis malesuada, molestie enim ipsum aliquam amet bibendum varius, fermentum sollicitudin ac vehicula class.

      1. This privacy policy (“Privacy Policy”) applies to all products/software, services and websites of TextNow, Inc. (TextNow, “our”, “we” or “us”) (collectively, the “Services”). You (“you” or “your”) consent to this Privacy Policy for collecting, using, disclosing and handling of your information (personal and device information) in connection with your access to, and use of, the Services. The 2ndLine Application and the TextNow Application are both applications (software) from TextNow, Inc.

      2. AS PART OF THE SERVICES, YOU ARE PROVIDED WITH A US/CANADIAN FORMATED TELEPHONE NUMBER. THE TELECOMMUNICATIONS INFRASTRUCTURE NECESSARY TO PROVIDED THE SERVICES ARE LOCATED IN THE US AND CANADA, AS SUCH YOU ARE UNDER THE JURISDICTION OF THE LAWS OF THE UNITED STATES AND THE LAWS OF CANADA when you accept the Services with the US/Canadian telephone number.

      3. TextNow provides “Free” Services as well as paid Services for users. In order to pay for the “Free” Service, personalized advertisements are placed before you. Your information is used to personalize the advertisements.

      4. We safeguard your information in accordance with industry procedures and security standards. HOWEVER, “PERFECT SECURITY” DOES NOT EXIST ON THE INTERNET, THEREFORE, TEXTNOW MAKES NO REPRESENTATIONS OR WARRANTIES WITH REGARD TO THE SUFFICIENCY OF THESE SECURITY MEASURES. TEXTNOW SHALL NOT BE RESPONSIBLE FOR ANY ACTUAL OR CONSEQUENTIAL DAMAGES (OR ANY OTHER DAMAGES OR LIABILITY OF ANY KIND WHATSOEVER, WHETHER AS A RESULT OF NEGLIGENCE OR OTHERWISE) THAT RESULT FROM A LAPSE IN COMPLIANCE WITH THIS PRIVACY POLICY BECAUSE OF A SECURITY BREACH OR TECHNICAL MALFUNCTION.

      5. The Services are not intended for use by anyone who is not able to enter into a legally binding contract. In any event, if you under 13 years old or if you are not able to legally form binding contracts, you may not use any of the Services or submit information about yourself to Us. If you have objections to this Privacy Policy, you should not access, sign up for, or use any of the Services.

      6. If You are a resident of the European Economic Area or EU, please deactivate your account with us. We are currently focused on US and Canadian markets and have not yet implemented the EU’s General Data Protection Regulations.

      7. TextNow reserves the right to modify these policies at any time. We invite you to periodically consult this section for possible updates and changes. Notification of any major changes may be sent to you by email or a system message to your account.

      8. If you wish to contact our Privacy Officer, you may contact them through one of the following means:
    </div>
  </div>
}

export async function getStaticProps() {
  const res = await fetch('http://swapi.py4e.com/api/people/1');
  const result = await res.json();

  console.log(result);
  return {
    props: {
      result
    },
    revalidate: 60
  }

}
