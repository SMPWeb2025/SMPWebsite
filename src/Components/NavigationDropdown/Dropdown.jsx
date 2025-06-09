import { DropdownMenu, Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Dropdown({navItems}) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="classic" size="3">
                    Navigate To
                    <DropdownMenu.TriggerIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2">
                {navItems.map((item) => 
                
                
                    <DropdownMenu.Item key={item} asChild>
                        <Link to='/'>{item}</Link>
                    </DropdownMenu.Item>
                
                )}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default Dropdown;