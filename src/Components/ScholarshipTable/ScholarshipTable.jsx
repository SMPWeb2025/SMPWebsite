import { Table } from '@radix-ui/themes'

const ScholarshipTable = () => {
  return (
    <Table.Root variant='surface' size="3">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Income Limit</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Women</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Others</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>SC/ST Women</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>SC/ST Others</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Income Upto Rs. 1L</Table.RowHeaderCell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 40,000 per year</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 40,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Income above Rs. 1L to 3L</Table.RowHeaderCell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 30,000 per year</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 30,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Income above Rs. 3L upto 5L</Table.RowHeaderCell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 20,000 per year</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>MCM Rs. 20,000 per year</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Women merit scholarship Rs. 10,000 per year</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
          <Table.Cell>
            <ul className='list-disc'>
              <li>Exemption from tuition fees</li>
              <li>Free messing</li>
              <li>Pocket allowance @ 500 p.m</li>
              <li>Hostel rent exempted</li>
            </ul>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default ScholarshipTable;
