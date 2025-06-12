import {Table} from '@radix-ui/themes'

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
        Exemption from tuition fees<br />
        MCM Rs. 40,000 per year<br />
        Women merit scholarship Rs. 10,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        MCM Rs. 40,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        Women merit scholarship Rs. 10,000 per year<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Income above Rs. 1L to 3L</Table.RowHeaderCell>
      <Table.Cell>
        Exemption from tuition fees<br />
        MCM Rs. 30,000 per year<br />
        Women merit scholarship Rs. 10,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        MCM Rs. 30,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        Women merit scholarship Rs. 10,000 per year<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Income above Rs. 3L upto 5L</Table.RowHeaderCell>
      <Table.Cell>
        Exemption from tuition fees<br />
        MCM Rs. 20,000 per year<br />
        Women merit scholarship Rs. 10,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        MCM Rs. 20,000 per year
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br />
        Women merit scholarship Rs. 10,000 per year<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
      <Table.Cell>
        Exemption from tuition fees<br /><br />
        Free messing<br />
        Pocket allowance @ 500 p.m<br />
        Hostel rent exempted
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>


    // </Container>
  );
};

export default ScholarshipTable;