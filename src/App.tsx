/* eslint-disable jsx-a11y/control-has-associated-label */
import { UserWarning } from './UserWarning';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { useTodo } from './provider/todoProvider';
import { ErrorMessage } from './components/ErrorMessage';

const USER_ID = 11578;

export const App: React.FC = () => {
  const { todos, error } = useTodo();

  if (!USER_ID) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <div className="todoapp__content">
        <Input />
        {todos && <TaskList />}

        {/* Hide the footer if there are no todos */}
        {todos.length !== 0
          && (
            <Footer />
          )}
      </div>
      {error && (
        <ErrorMessage />
      )}
    </div>
  );
};
