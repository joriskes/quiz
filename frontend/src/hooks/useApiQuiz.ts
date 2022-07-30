import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../utils/api';
import { Quiz } from '../types';

function useApiQuiz() {
  const { data, isLoading, isError } = useQuery(['quizzes'], () =>
    apiGet<Quiz>('/quizzes')
  );

  return {
    isLoading,
    isError,
    data,
  };
}

export default useApiQuiz;
