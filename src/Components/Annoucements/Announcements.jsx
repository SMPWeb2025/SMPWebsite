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
          <div className="announcement-pulse">
            <Button variant="classic" size="3" color="amber">
              Announcements
              <FontAwesomeIcon icon={faBullhorn} size="xl" />
            </Button>
          </div>
        </Dialog.Trigger>
        <Dialog.Content size="2" maxWidth="500px">
          <Dialog.Title>Announcements</Dialog.Title>
          <Dialog.Description asChild>
            
          <div className="news-content">
          <ul>
            <li style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>
              All the details for the new UG entrants is availabe <a target="_blank" className="text-blue-600 hover:underline" style={{padding: 0}} href="https://acad.iitb.ac.in/information-ug-new-entrants-2026-27">
                here
              </a>
              . 
            </li>
            <li style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>
              You can check the Academic calendar{' '}
              <a className="text-blue-600 hover:underline" target="_blank" style={{padding: 0}} href="https://acad.iitb.ac.in/sites/default/files/Academic_Calendar_2026-27_FINAL.pdf">
                here
              </a>
              . Note that the dates are subject to change.
            </li>
            <li  style={{ fontSize: '0.75em' }}>
              <sup>
                <img src={newGif} alt="" />
              </sup>{' '}
              <b>Update</b>: The option for branch change has been removed from the academic year
              2024-25 onwards. Please refer to{' '}
              <a className="text-blue-600 hover:underline" style={{padding: 0}} href="https://youtu.be/F8XGjwg41p0">
                this
              </a>{' '}
              video and{' '}
              <a className="text-blue-600 hover:underline" style={{padding: 0}} href="/academics/departments">
                this
              </a>{' '}
              page to know more about the branches at IITB and make an informed choice.
            </li>
            <li style={{ fontSize: '0.75em' }}>
              Contact information for prospective women students:{' '}
              <a className="text-blue-600 hover:underline" href="mailto:jeew.helpdesk@iitb.ac.in">jeew.helpdesk@iitb.ac.in</a>
            </li>
          </ul>
        </div>
          <div className="portal">
            <ul>
              <li>
                <a target="_blank" href="https://gymkhana.iitb.ac.in/newbee">FAQs and Query Portal</a> 
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
