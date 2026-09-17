import IssueList from './components/issue-list';
import { useState } from 'react';
import { Issue } from './types/issue';
import IssueForm from './components/issue-form';

export function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [formInitialIssue, setFormInitialIssue] = useState<Issue | undefined>(undefined);

  function handleIssueSubmit(issue: Issue) {
    if (issues.some(existingIssue => existingIssue.id === issue.id)) {
      // Update existing issue
      setIssues(issues.map(existingIssue => existingIssue.id === issue.id ? issue : existingIssue));
    } else {
      // Add new issue
      setIssues([...issues, issue]);
    }
  }

  function handleIssueEdit(issue: Issue) {
    setFormInitialIssue(issue);
  }

  return (
    <>
      <h1>Issue Tracker</h1>
      <IssueForm key={formInitialIssue?.id ?? 'new'} initialIssue={formInitialIssue} onSubmit={handleIssueSubmit} />
      <IssueList issues={issues} editCallback={handleIssueEdit} />
    </>
  );
}