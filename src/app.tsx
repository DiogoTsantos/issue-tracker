import IssueList from './components/issue-list';
import { useState } from 'react';
import type { Issue } from './types/issue';
import IssueForm from './components/issue-form';

export function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [formInitialIssue, setFormInitialIssue] = useState<Issue | undefined>(undefined);

  function handleIssueSubmit(issue: Issue) {
    if (issues.some(existingIssue => existingIssue.id === issue.id)) {
      // Update existing issue
      setIssues( (prevIssues) => prevIssues.map(existingIssue => existingIssue.id === issue.id ? issue : existingIssue));
    } else {
      // Add new issue
      setIssues( (prevIssues) => [...prevIssues, issue] );
    }

    setFormInitialIssue(undefined);
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