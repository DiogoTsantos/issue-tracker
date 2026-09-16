import { Issue } from "../types/issue";

type IssueListProps = {
  issues: Issue[];
  children: (issue: Issue) => React.ReactNode;
};

export default function IssueList({ issues, children }: IssueListProps) {
  return (
    <table className='issue-list'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {
          issues.length === 0 ? (
            <tr>
              <td colSpan={4}>No issues found.</td>
            </tr>
          ) : (
            issues.map((issue) => (
              children(issue)
            ))
          )
        }
      </tbody>
    </table>
  );
}