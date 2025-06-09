import { Flex, Dialog, Text, Button } from "@radix-ui/themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './announcements.css'
import newGif from "../../assets/img/new.gif";

function Announcements() {
  return (
    <Flex gap="4" align="start">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="classic" size="3" color="amber">
            Announcements
            <FontAwesomeIcon icon={faBullhorn} size="xl"/>
          </Button>
        </Dialog.Trigger>
        <Dialog.Content size="2" maxWidth="500px">
          <Dialog.Title>Announcements</Dialog.Title>
          <Dialog.Description asChild>
            
          <div className="news-content">
          <ul>
            <li className="link" style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>
              You can check the Academic calendar{' '}
              <a className="link" href="https://www.iitb.ac.in/newacadhome/toacadcalender.jsp">
                here
              </a>
              . Note that the dates are subject to change.
            </li>
            <li className="link" style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>{' '}
              <b>Update</b>: The option for branch change has been removed for the academic year
              2024-25. Please refer to{' '}
              <a className="link" href="https://youtu.be/F8XGjwg41p0">
                this
              </a>{' '}
              video and{' '}
              <a className="link" href="academics_dept.php">
                this
              </a>{' '}
              page to know more about the branches at IITB and make an informed choice.
            </li>
            <li style={{ fontSize: '0.75em' }}>
              Contact information for prospective women students:{' '}
              <a href="mailto:jeew.helpdesk@iitb.ac.in">jeew.helpdesk@iitb.ac.in</a>
            </li>
            <li>
              <a href="faq.php">FAQs and Query Portal</a>
            </li>
          </ul>
        </div>
          </Dialog.Description>
          <Flex gap="3" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="red">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  )
}

export default Announcements;
