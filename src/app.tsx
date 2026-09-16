import IssueItem from './components/issue-item';
import IssueList from './components/issue-list';
import { issues } from './data/issue-collection';

export function App() {
  return (
    <>
      <h1>Issue Tracker</h1>
      <IssueList issues={issues} children={(issue) => <IssueItem key={issue.id} issue={issue} />} />
    </>
  );
}