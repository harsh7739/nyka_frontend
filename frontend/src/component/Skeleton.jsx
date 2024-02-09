import {Stack, Skeleton } from '@chakra-ui/react'

function SkeletonComponent(){
    return <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
}
export default SkeletonComponent