import IssueList from './components/issue-list';
import { useState } from 'react';
import type { Issue } from './types/issue';
import IssueForm from './components/issue-form';

export function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [formInitialIssue, setFormInitialIssue] = useState<Issue | undefined>(undefined);

  function handleIssueSubmit(issue: Issue) {
    setIssues((prevIssues) => {
      const issueExists = prevIssues.some(
        (existingIssue) => existingIssue.id === issue.id
      );
      if (issueExists) {
        return prevIssues.map(existingIssue => 
          existingIssue.id === issue.id
            ? issue
            : existingIssue
        );
      }

      return [...prevIssues, issue];
    });

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