import { ChangeEvent, useState } from 'react';
import {
  Button,
  Center,
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
  Link,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';

import { CircleIcon } from 'components';

import useReactQuery from './useReactQuery';
import useThrottle from './useThrottle';

import { Repository } from 'Repository-Type';

import styles from './styles.module.scss';
import { NUMBER_OF_REPOSITORIES_PER_PAGE } from 'apis/repositories';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const throttleSearchQuery = useThrottle(searchQuery);

  const {
    repositories,
    totalCount,
    isLoading,
    hasError,
    currentPage,
    setCurrentPage,
  } = useReactQuery(throttleSearchQuery);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const onPageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const hasMore = totalCount > currentPage * NUMBER_OF_REPOSITORIES_PER_PAGE;

  return (
    <div className={styles.container}>
      <FormControl className={styles.searchFormContainer}>
        <FormLabel>Github repository name</FormLabel>
        <Input
          placeholder='Input Github repository name'
          onChange={onInputChange}
        />
      </FormControl>
      {isLoading && (
        <Center>
          <CircularProgress isIndeterminate color='green.300' />
        </Center>
      )}

      {!hasError && !isLoading && totalCount === 0 && searchQuery && (
        <Center>
          <Text fontSize={20}>
            We couldn’t find any repositories matching '{searchQuery}'
          </Text>
        </Center>
      )}
      {hasError && (
        <Center>
          <Text color='red.500' fontSize={20}>
            API rate limit exceeded. Please wait for some time to be continue to
            search
          </Text>
        </Center>
      )}
      {totalCount > 0 && (
        <>
          <UnorderedList className={styles.repositoriesContainer} spacing={6}>
            <ListItem className={styles.repositoryWrapper}>
              <Text fontSize={20}>Total: {totalCount} repositories</Text>
            </ListItem>
            {repositories.map((item: Repository) => (
              <ListItem className={styles.repositoryWrapper} key={item.id}>
                <Link color='teal.400' href='#' fontWeight='bold' fontSize={16}>
                  {item.full_name}
                </Link>
                <Text fontSize={14} mb={1} className={styles.description}>
                  {item.description}
                </Text>
                {item.topics.map((topic: string, index: number) => (
                  <Tag
                    className={styles.topicTag}
                    fontSize={12}
                    mb={1}
                    key={`${topic}-${index}`}
                  >
                    {topic}
                  </Tag>
                ))}
                <Stack direction='row' alignItems='center' fontSize={12}>
                  <StarIcon />
                  <Text>{item.stargazers_count}</Text>
                  {item.language && (
                    <>
                      <CircleIcon /> <Text>{item.language}</Text>
                    </>
                  )}
                </Stack>
              </ListItem>
            ))}
          </UnorderedList>
          <Stack
            spacing={4}
            direction='row'
            align='center'
            justify='flex-end'
            className={styles.pages}
          >
            <Button
              isDisabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              leftIcon={<ArrowBackIcon />}
            >
              Previous
            </Button>

            <span>{currentPage}</span>
            <Button
              isDisabled={!hasMore}
              onClick={() => onPageChange(currentPage + 1)}
              rightIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
};

export default HomePage;
