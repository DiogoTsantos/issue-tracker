import type { Issue } from '../types/issue';

export default function IssueItem({ issue, editCallback }: { issue: Issue; editCallback: (issue: Issue) => void }) {
  return (
    <tr className='issue-item'>
      <td>
        <button onClick={() => editCallback(issue)}>Edit</button>
      </td>
      <td>{issue.id}</td>
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td>{issue.status}</td>
      <td>{issue.priority}</td>
      <td>{issue.createdAt}</td>
    </tr>
  );
}