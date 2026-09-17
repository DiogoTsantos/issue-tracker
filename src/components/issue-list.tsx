import type { Issue } from "../types/issue";
import IssueItem from "./issue-item";

export default function IssueList({ issues, editCallback }: { issues: Issue[]; editCallback: (issue: Issue) => void }) {
  return (
    <table className='issue-list'>
      <thead>
        <tr>
          <th>Actions</th>
          <th>ID</th>
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
              <td colSpan={7}>No issues found.</td>
            </tr>
          ) : (
            issues.map((issue) => (
              <IssueItem key={issue.id} issue={issue} editCallback={editCallback} />
            ))
          )
        }
      </tbody>
    </table>
  );
}