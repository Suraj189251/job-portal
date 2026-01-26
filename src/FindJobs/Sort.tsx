import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt= ['Relevence', 'Most recent', 'Salary(Low to High)', 'Salary(Low to High)' ];

const Sort=()=> {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevence');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
     

      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
  <div
    onClick={() => combobox.toggleDropdown()}
    className="flex cursor-pointer hover:bg-mine-shaft-900 items-center text-sm border border-bright-sun-400 rounded-xl py-1 px-2 pr-1"
  >
    {selectedItem}

    <ActionIcon
      color="bright-sun.4"
      variant="transparent"
      aria-label="Settings"
    >
      <IconAdjustments
        style={{ width: "70%", height: "70%" }}
        stroke={1.5}
      />
    </ActionIcon>
  </div>
</Combobox.Target>


        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;