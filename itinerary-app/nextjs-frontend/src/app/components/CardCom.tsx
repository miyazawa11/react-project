"use client"
import { Card, Image, Text, Badge, Button, Group ,Modal} from '@mantine/core';
import { Textarea } from '@mantine/core';

import { ScrollArea, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css'
import { MultiSelectCreatable } from './MultiSelect';
const CardCom = ({move}) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
          <Modal opened={opened} onClose={close}>
          <Card className='w-64 mx-auto bg-slate-600 '  shadow="sm" padding="lg" radius="md">
            <Card.Section>
              <Carousel withIndicators height={150} loop>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              {/* ...other slides */}
          </Carousel>
            </Card.Section>

            <Group justify="start" mt="sm" mb="sm">
              <Text fw={500}>
              <input type="email" defaultValue={"タイトル：Norway Fjord Adventures"} className="peer py-3 px-2 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter title"/>
              </Text>
              <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
              <div className='w-full flex flex-nowrap overflow-auto mb-2'>
                <MultiSelectCreatable/>
              </div>
              </ScrollArea>
            </Group>
            <ScrollArea style={{"height":"full"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="y">
            <Text size="md" c="dimmed">
                <Textarea 
                  defaultValue={"メモ：With Fjord Tours you can explore more of the magical fjord landscapes with tours andactivities on and around the fjords of Norway"}
                  placeholder="Input placeholder"
                />
            </Text>
            </ScrollArea>

            <Button onClick={close} color="blue" fullWidth mt="md" radius="md">
              保存
            </Button>
          </Card>
          </Modal>
          <Card className='w-64 m-2 bg-slate-600'  shadow="sm" padding="lg" radius="md">
            <Card.Section>
              <Carousel withIndicators height={150} loop>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              {/* ...other slides */}
          </Carousel>
            </Card.Section>

            <Group justify="start" mt="sm" mb="sm">
              <Text fw={500}>タイトル：Norway Fjord Adventures</Text>
              <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
              <div className=' w-full flex flex-nowrap overflow-auto mb-2'>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
              </div>
              </ScrollArea>
            </Group>

            <Text size="sm" c="dimmed">
              メモ：With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button onClick={open} color="blue" fullWidth mt="md" radius="md">
              編集
            </Button>
          </Card>
          
        </>
    );
  };
  
  export default CardCom;
  